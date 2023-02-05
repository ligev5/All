<template>
  <div class="custom-tree-container">
    <el-card>
      <div class="block">
        <p>传智教育</p>
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        >
        </el-tree>
      </div>
    </el-card>
  </div>
</template>

<script>
let id = 1000

export default {
  components: {
  },
  data() {
    const data = [
      {
        id: 1,
        label: '总裁办11',
        children: [
          {
            id: 4,
            label: '总裁办11',
          },
          {
            id: 5,
            label: '总裁办11',
          }
        ]
      },
      {
        id: 2,
        label: '行政部',
        children: [
          {
            id: 5,
            label: '行政部123'
          },
        ]
      },
      {
        id: 3,
        label: '人事部',
        children: [
          {
            id: 7,
            label: '人事部11'
          },
          {
            id: 8,
            label: '人事部22'
          },
        ]
      },
      {
        id: 4,
        label: '财务部',
        children: [
          {
            id: 8,
            label: '财务核算部2'
          },
          {
            id: 9,
            label: '税务管理部'
          },
          {
            id: 10,
            label: '薪资管理部'
          }
        ]
      },
      {
        id: 5,
        label: '技术部',
        children: [
          {
            id: 9,
            label: 'Java研发部'
          },
          {
            id: 10,
            label: 'Python研发部'
          },
          {
            id: 11,
            label: 'Php研发部'
          },
        ]
      },
      {
        id: 6,
        label: '运营部',
      },

      {
        id: 66,
        label: '市场部',
        children: [
          {
            id: 12,
            label: '北京事业部'
          },
          {
            id: 13,
            label: '上海事业部'
          }
        ]
      },
    ]
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
    }
  },

  methods: {
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
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button   size="mini" type="text" on-click={() => this.append(data)}>
              负责人
            </el-button>
            <el-button style="color:#000;"  size="mini" type="text" on-click={() => this.remove(node, data)}>
              删除
            </el-button>
          </span>
        </span>
      )
    }
  }
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.block{
	width: 800px;
	margin-left: 15%;
}

</style>
