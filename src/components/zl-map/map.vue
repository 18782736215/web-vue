<template>
  <!-- 基于 Vue 2.x 与高德的地图组件 -->
  <div class="map_box">
    <div class="amap_search_box">
      <div class="amap_box left">
        <input id="searchInput" v-model="param.searchAddress" clearable class="amap_input" prefix-icon="el-icon-search">
        <button type="default" @click="operateM('search')">搜 索</button>
        <div id="searchResults" class="tip-box" />
      </div>
      <div class="amap_box right">
        <div class="title">当前地址</div>
        <input id="searchInput" v-model="param.detailAddress" type="text" class="amap_input" disabled>
        <button type="button" @click="operateM('confirm')">确 认</button>
        <div id="searchResults" class="tip-box" />
      </div>
    </div>
    <el-amap class="amap-box" :vid="'amap-vue'" :amap-manager="amapManager" :zoom="zoom" :plugin="plugin" :center="center" :events="events">
      <!-- 根据搜索条件展示搜索出来的地图标记 -->
      <el-amap-marker v-for="(marker, index) in param.markers" :key="index" :position="marker" />
    </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
const amapManager = new AMapManager()
export default {
  name: 'ZlMap',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          searchAddress: '' // 搜索地址
        }
      }
    }
  },
  data() {
    let self = this
    return {
      param: {
        address: null, //
        searchAddress: null, // 搜索地址
        detailAddress: null, // 顶部展示详细地址
        provinceAddress: null, // 省市区
        adcode: '',
        markers: [] // 标记点
      },
      amapManager,
      center: [104.144043, 30.630191],
      zoom: 17,
      lng: 0,
      lat: 0,
      events: {
        init() {
          lazyAMapApiLoaderInstance.load().then(() => {
            self.$nextTick(() => {
              self.initSearch()
            })
          })
        },
        // 点击获取地址的数据
        click(e) {
          self.param.markers = []
          // 获取经纬度
          const { lng, lat } = e.lnglat
          self.lng = lng
          self.lat = lat
          self.center = [lng, lat]
          self.param.markers.push([lng, lat])
          // 这里通过高德 SDK 完成。
          const geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              let arr = []
              let b = ''
              if (result && result.regeocode) {
                b = result.regeocode.addressComponent.province + result.regeocode.addressComponent.city + result.regeocode.addressComponent.district
                self.param.address = self.getArrDifference(b, result.regeocode.formattedAddress).join('')
                self.param.detailAddress = result.regeocode.formattedAddress
                self.param.adcode = result.regeocode.addressComponent.adcode
                arr = [result.regeocode.addressComponent.province, result.regeocode.addressComponent.city, result.regeocode.addressComponent.district]
                self.param.provinceAddress = arr
                // self.operateM('confirm')
                self.$nextTick()
              }
            }
          })
        }
      },
      // 一些工具插件
      plugin: [
        {
          pName: 'Geocoder',
          events: {
            init(o) {
              o.getAddress()
            }
          }
        },
        {
          // 定位
          pName: 'Geolocation',
          events: {
            init(o) {
              if (!self.value.search) {
                // o是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (status == 'complete') {
                    // if (result && result.position)
                    // 设置经度
                    self.lng = result.position.lng
                    // 设置维度
                    self.lat = result.position.lat
                    // 设置坐标
                    self.center = [self.lng, self.lat]
                    self.param.markers.push([self.lng, self.lat])
                    let b = result.addressComponent.province + result.addressComponent.city + result.addressComponent.district
                    self.param.address = self.getArrDifference(b, result.formattedAddress).join('')
                    self.param.adcode = result.addressComponent.adcode
                    self.param.detailAddress = result.formattedAddress
                    let arr = [result.addressComponent.province, result.addressComponent.city, result.addressComponent.district]
                    self.param.provinceAddress = arr
                    // self.operateM('confirm')
                    self.$nextTick()
                  } else {
                    console.error('Geolocation', result)
                  }
                })
              }
            }
          }
        },
        {
          // 工具栏
          pName: 'ToolBar',
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          // 鹰眼
          pName: 'OverView',
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          // 地图类型
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          // 搜索
          pName: 'PlaceSearch',
          events: {
            init(instance) {
              // console.log(instance)
            }
          }
        }
      ],
      poiPicker: null
    }
  },
  watch: {
    'value.searchAddress': {
      handler() {
        this.param.searchAddress = this.value.searchAddress || null
        this.param.detailAddress = this.value.searchAddress || null
        this.$nextTick(() => {
          // this.operateM('search')
        })
      },
      immediate: true
    }
  },
  methods: {
    operateM(type) {
      switch (type) {
        case 'search':
          if (this.param.searchAddress && this.poiPicker != null) {
            this.poiPicker.searchByKeyword(this.param.searchAddress)
          }
          break
        case 'confirm':
          this.$emit('change', this.param)
          break
      }
    },
    initSearch() {
      try {
        const self = this
        const map = this.amapManager.getMap()
        AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
          var poiPicker = new PoiPicker({
            input: 'searchInput',
            placeSearchOptions: {
              map: map,
              pageSize: 10
            },
            suggestContainer: 'searchResults',
            searchResultsContainer: 'searchResults'
          })
          // console.log('poiPicker', poiPicker)
          self.poiPicker = poiPicker
          // 调用搜索方法
          self.operateM('search')
          // 监听poi选中信息
          poiPicker.on('poiPicked', function(poiResult) {
            const source = poiResult.source
            const poi = poiResult.item
            // console.log(poi)
            if (source !== 'search') {
              let a = poi.district + poi.name
              self.param.searchAddress = poi.district + poi.name
              poiPicker.searchByKeyword(a)
            } else {
              poiPicker.clearSearchResults()
              self.param.markers = []
              let arr = []
              const lng = poi.location.lng
              const lat = poi.location.lat
              const address = poi.name
              self.center = [lng, lat]
              self.param.markers.push([lng, lat])
              self.lng = lng
              self.lat = lat
              self.param.address = address
              self.param.searchAddress = address
              // console.log(poi)
              self.param.detailAddress = poi.pname + poi.cityname + poi.adname + poi.name
              self.param.adcode = poi.adcode
              arr = [poi.pname, poi.cityname, poi.adname]
              self.param.provinceAddress = arr
              // self.operateM('confirm')
            }
          })
        })
      } catch (error) {
        console.log(error)
      }
    },
    // 取出两个数组的不同元素
    getArrDifference(arr1, arr2) {
      arr1 = arr1.split('')
      arr2 = arr2.split('')
      return arr2.splice(arr1.length, arr2.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.map_box {
  position: relative;
  width: 100%;
  height: 100%;
}

.amap_search_box {
  position: absolute;
  z-index: 5;
  width: 70%;
  top: 5px;
  left: 15%;
  display: flex;
  justify-content: space-around;
  .amap_box {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-sizing: border-box;
    .amap_input {
      height: 30px;
      width: 280px;
      border: none;
      outline: none;
      background-color: #fff;
    }
    ::v-deep .el-input__inner {
      background-color: #fff;
      border-color: #fff;
      border-radius: 8px;
    }
    .title {
      height: 30px;
      line-height: 30px;
      width: 60px;
      font-size: 14px;
      font-weight: bold;
      color: $--color-primary;
      border: none;
      outline: none;
    }
    button {
      font-size: 14px;
      width: 60px;
      margin-left: 10px;
      background: $--color-primary;
      border: 1px solid $--color-primary;
      border-radius: 8px;
      color: #fff;
    }
  }
}

.tip-box {
  width: 100%;
  max-height: 260px;
  position: absolute;
  top: 45px;
  overflow-y: auto;
  background-color: #fff;
}
</style>
