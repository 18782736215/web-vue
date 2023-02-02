<template>
  <div>
    <zl-header> Upload 上传 </zl-header>
    <div class="section_bg">
      <zle-alert title="基于element封装 只能上传图片注意删除、上传文件接口不能立即调用 ，需要等数据传输时才调用" type="warning" />
      <zle-collapse v-model="activeNames">
        <zle-collapse-item title="图片上传" name="1">
          <div class="flex_b_center">
            <zle-upload ref="baseUpload" v-model="urls1" :req-upload-file="api" :show-upload="true" multiple @change="uploadChange1" />
            <div style="min-width:fit-content;">
              <zle-button type="primary" @click="reqUpload">确认上传</zle-button>
              <zle-button type="secondary" @click="changeImg">修改值</zle-button>
              <zle-button @click="resetFiles">重置图片</zle-button>
            </div>
          </div>
          <hr>
          {{ urls1 }}
        </zle-collapse-item>
        <!-- <zle-collapse-item title="图片上传" name="1">
          <div class="flex_b_center">
            <zle-upload ref="baseUpload" v-model="urls" list-type="picture" :upload-type="['png']" upload-name="上传图片" multiple @change="uploadChange" />
            <div>
              <zle-button type="primary" @click="reqUpload">确认上传</zle-button>
            </div>
          </div>
          <hr>
          <pre class="msg_tip">
list-type="picture"
					</pre>
          {{ urls }}
        </zle-collapse-item> -->
        <zle-collapse-item title="文件上传" name="1">
          <span class="msg_tip" />
          <div class="flex_b_center">
            <div class="flex_1">
              <zle-upload ref="textUpload" v-model="textList" :req-upload-file="api" list-type="text">
                <zle-button type="primary">文件上传</zle-button>
              </zle-upload>
            </div>
            <div>
              <zle-button type="primary" @click="reqUploadText">确认上传</zle-button>
            </div>
          </div>
          <hr>
          <span class="msg_tip">非图片文件上传</span>
          <pre class="msg_tip">
list-type="text
					</pre>
          <hr>
          {{ textList }}
        </zle-collapse-item>
        <zle-collapse-item title="按钮上传并预览" name="1">
          <zle-upload ref="uploadCustomerReview" v-model="uploadList1" :req-upload-file="api">
            <zle-button type="primary">按钮上传并预览</zle-button>
          </zle-upload>
          {{ uploadList1 }}
        </zle-collapse-item>
        <zle-collapse-item title="自定义上传图片内容" name="1">
          <span slot="title"> 自定义上传图片内容<span class="msg_tip success">并预览</span> </span>
          <zle-upload ref="uploadCustomerReview" v-model="uploadList2" :req-upload-file="api">
            <zle-button type="primary">上传并预览</zle-button>
          </zle-upload>
          {{ uploadList2 }}
        </zle-collapse-item>
      </zle-collapse>
      <zle-card header="按钮上传不预览">
        <zle-upload ref="uploadCustomer" v-model="uploadArr" :req-upload-file="api" :show-file-list="false">
          <zle-button type="primary">按钮上传不预览</zle-button>
        </zle-upload>
        {{ uploadArr }}
      </zle-card>
      <zle-card header="只用做回显">
        <zle-upload v-model="urls2" :show-upload="false" :req-upload-file="api" />
      </zle-card>
      <zle-card header="文件大小上传限制">
        <zle-upload v-model="urls3" :file-size="500" :show-upload="true" :req-upload-file="api" @change="uploadChange3" />
        限制上传大小为500kb
      </zle-card>
      <zle-card header="文件类型">
        <zle-upload v-model="urls4" :upload-type="['jpeg', 'png']" :show-upload="true" :req-upload-file="api" @change="uploadChange4" />
        这里限制只能上传jpeg和png图片
      </zle-card>
    </div>
  </div>
</template>

<script>
import { reqUploadFile } from '@/api/modules/file'
export default {
  components: {},
  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
      fileList: [],
      urls1: [
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        }
      ],
      urls2: [
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        }
      ],
      urls3: [
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        }
      ],
      urls4: [
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        }
      ],
      uploadList1: [], // 上传
      uploadList2: [], // 上传
      uploadArr: [], // 上传
      textList: [],
      api: reqUploadFile
    }
  },
  methods: {
    changeImg() {
      let urlList = ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg']
      urlList = urlList.map(v => {
        return { url: v }
      })
      this.urls1 = this.urls1.concat(urlList)
    },
    uploadChange1(val) {
      this.urls1 = val
    },
    uploadChange3(val) {
      this.urls3 = val
    },
    uploadChange4(val) {
      this.urls4 = val
    },
    async reqUpload() {
      // 调用删除、上传图片
      let res = await this.$refs.baseUpload.updateFile()
      console.log(res)
    },
    async reqUploadText() {
      let res = await this.$refs.textUpload.updateFile()
      console.log(res)
    },
    resetFiles() {
      // 数据重置
      this.$refs.baseUpload.resetFile()
    }
  },
  errorCaptured(err, vm, info) {
    console.log(err, vm, info)
  }
}
</script>

<style lang="scss" scoped></style>
