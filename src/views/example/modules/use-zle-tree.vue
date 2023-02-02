<template>
  <div>
    <zl-header> Tree 树形控件 </zl-header>
    <zl-section header="基础用法">
      <zle-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick" />
    </zl-section>
    <zl-section header="可选择">
      <zle-tree ref="tree1" :props="defaultProps1" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange" />
      <hr>
      <div>{{ selectValue }}</div>
    </zl-section>
    <zl-section header="懒加载自定义叶子节点">
      <zle-tree ref="tree3" :props="props" :load="loadNode1" lazy show-checkbox @check-change="handleCheckChange2" />
      <hr>
      <div>{{ selectValue2 }}</div>
    </zl-section>
    <zl-section header="禁用状态">
      <zle-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />
      <hr>
      <div>{{ data2 }}</div>
    </zl-section>
    <zl-section header="树节点的选择">
      <zle-tree ref="tree" :data="data3" show-checkbox default-expand-all node-key="id" highlight-current />
      <div class="buttons">
        <zle-button @click="getCheckedNodes">通过 node 获取</zle-button>
        <zle-button @click="getCheckedKeys">通过 key 获取</zle-button>
        <zle-button @click="setCheckedNodes">通过 node 设置</zle-button>
        <zle-button @click="setCheckedKeys">通过 key 设置</zle-button>
        <zle-button @click="resetChecked">清空</zle-button>
      </div>
      <hr>
      <div>{{ selectValue4 }}</div>
    </zl-section>
    <zl-section header="自定义节点内容">
      <div class="custom-tree-container">
        <div class="block">
          <p>使用 render-content</p>
          <zle-tree :data="data5" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" />
        </div>
        <div class="block">
          <p>使用 scoped slot</p>
          <zle-tree :data="data6" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <zle-button type="text" size="mini" @click="() => append(data)"> Append </zle-button>
                <zle-button type="text" size="mini" @click="() => remove(node, data)"> Delete </zle-button>
              </span>
            </span>
          </zle-tree>
        </div>
      </div>
    </zl-section>
    <zl-section header="节点过滤">
      <zle-input v-model="filterText" placeholder="输入关键字进行过滤" />
      <zle-tree ref="trees" class="filter-tree" :data="data7" default-expand-all :filter-node-method="filterNode" />
    </zl-section>
    <zl-section header="手风琴模式">
      <zle-tree :data="data1" accordion @node-click="handleNodeClick" />
    </zl-section>
    <zl-section header="可拖拽节点">
      <zle-tree
        :data="data9"
        node-key="id"
        default-expand-all
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
      />
    </zl-section>
  </div>
</template>

<script>
let id = 1000
export default {
  data() {
    const data4 = [
      {
        id: 1,
        label: '一级 1',
        children: [
          {
            id: 4,
            label: '二级 1-1',
            children: [
              {
                id: 9,
                label: '三级 1-1-1'
              },
              {
                id: 10,
                label: '三级 1-1-2'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: '一级 2',
        children: [
          {
            id: 5,
            label: '二级 2-1'
          },
          {
            id: 6,
            label: '二级 2-2'
          }
        ]
      },
      {
        id: 3,
        label: '一级 3',
        children: [
          {
            id: 7,
            label: '二级 3-1'
          },
          {
            id: 8,
            label: '二级 3-2'
          }
        ]
      }
    ]
    return {
      filterText: '',
      data7: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      data1: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      defaultProps1: {
        label: 'name',
        children: 'zones'
      },
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      count: 1,
      selectValue: {},
      selectValue2: {},
      selectValue4: [],
      data2: [
        {
          id: 1,
          label: '一级 2',
          children: [
            {
              id: 3,
              label: '二级 2-1',
              children: [
                {
                  id: 4,
                  label: '三级 3-1-1'
                },
                {
                  id: 5,
                  label: '三级 3-1-2',
                  disabled: true
                }
              ]
            },
            {
              id: 2,
              label: '二级 2-2',
              disabled: true,
              children: [
                {
                  id: 6,
                  label: '三级 3-2-1'
                },
                {
                  id: 7,
                  label: '三级 3-2-2',
                  disabled: true
                }
              ]
            }
          ]
        }
      ],
      data3: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      data5: JSON.parse(JSON.stringify(data4)),
      data6: JSON.parse(JSON.stringify(data4)),
      data9: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2',
              children: [
                {
                  id: 11,
                  label: '三级 3-2-1'
                },
                {
                  id: 12,
                  label: '三级 3-2-2'
                },
                {
                  id: 13,
                  label: '三级 3-2-3'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.trees.filter(val)
    }
  },
  created() {},
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate)
      console.log(this.$refs.tree1.getCheckedNodes())
      this.selectValue = this.$refs.tree1.getCheckedNodes()
    },
    handleCheckChange2(data, checked, indeterminate) {
      this.selectValue2 = this.$refs.tree3.getCheckedNodes()
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [
            {
              name: 'zone' + this.count++
            },
            {
              name: 'zone' + this.count++
            }
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    },
    loadNode1(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region' }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
          {
            name: 'leaf',
            leaf: true
          },
          {
            name: 'zone'
          }
        ]

        resolve(data)
      }, 500)
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes())
      this.selectValue4 = this.$refs.tree.getCheckedNodes()
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys())
      this.selectValue4 = this.$refs.tree.getCheckedKeys()
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: '二级 2-1'
        },
        {
          id: 9,
          label: '三级 1-1-1'
        }
      ])
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([])
    },
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
          <span>
            <zle-button size='mini' type='text' on-click={() => this.append(data)}>
              Append
            </zle-button>
            <zle-button size='mini' type='text' on-click={() => this.remove(node, data)}>
              Delete
            </zle-button>
          </span>
        </span>
      )
    },
    handleDragStart(node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.custom-tree-container {
  display: flex;
  justify-content: space-around;
}
</style>
