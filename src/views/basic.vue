<template>
  <div class="home">
     <div style="display:flex" v-for="item,index in data" :key="index">
        <div style="display:flex;align-items:center">
          <div>
            {{item.label}}
          </div>
        </div>
        <div style="display:flex;align-items:center;">
         <div>------</div>
          </div>
        <div>
      <div style="word-wrap:break-word; 
              word-break:break-all;
              overflow: hidden;/*这个参数根据需求来决定要不要*/"
      >
            <!-- 遍历循环节点 -->
            <div v-for="item,index in arr" :key="index" class="child">
               <div style="display:flex;align-items:center">
                 <div >----------</div>
                 <div style="display:flex;align-items:center;">
                   <div class="last-child">
                      <div class="last-child-container">
                      {{index === 4 ? '最后一个节点fffffffffffffffffffffffff和恢复德国和法国但是规划风格化地方': '节点'}}
                      </div>
                    </div>
                  <div>---------------</div>
                  <div>
                     <div v-for="item,index in 5" :key="index" class="child">
                       <div style="display:flex;align-items:center;">
                          <div>----------</div>
                          <div style="display:flex;align-items:center;">
                            <div class="last-child">
                            <div class="last-child-container">
                                  {{index === 4 ? '最后一个节点fffffffffffffffffffffffff和恢复德国和法国但是规划风格化地方': '节点'}}
                            </div>
                          </div>
                          <div>---------------</div>
                          </div>
                        
                      </div>
                     </div>
                  </div>
                 </div>
            </div>
            </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  mounted(){
   
  },
  data () {
    return {
            data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
      arr:[
        {
          title:'hsdghsadgsahd', 
        },
        {
          title:'hsdghsadgsahd', 
        },
        {
          title:'hsdghsadgsahd', 
        },
        {
          title:'hsdghsadgsahd', 
        },
      ],
    }
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped >
.child{
     position: relative;
 }
  .child::before{
  content:'';
  position:absolute;
  height:100%;
  width:1px;
  background-image: linear-gradient(to bottom, #2c3e50 0%, #2c3e50 80%, transparent 50%);
  background-size: 3px 6px;
  background-repeat: y-repeat
}
 .child:first-child::before{
  content:'';
  position:absolute;
  top:50%;
  height:50%;
  width:1px;
  background-image: linear-gradient(to bottom, #33383d 0%, #2c3e50 80%, transparent 50%);
  background-size: 3px 6px;
  background-repeat: y-repeat
}
.child:last-child::before{
   color: red;
  content:'';
  position:absolute;
  // top:50%;
  height:50%;
  width:1px;
  background-image: linear-gradient(to bottom, #2c3e50 0%, #2c3e50 80%, transparent 50%);
  background-size: 3px 6px;
  background-repeat: y-repeat
}
.last-child{
  // background-color: aqua;
  padding: 30px 0px 30px 0;
  // border:3px solid red;
}
.last-child-container{
  width: 200px;
  padding: 30px 30px;
  border:1px solid blue;
}
</style>