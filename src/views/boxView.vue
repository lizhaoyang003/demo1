<template>
  <div class="boxView">
    <div id="bmapgl" class="bmapgl" />
    <div id="result">
      点击展示详细的地址：
      <div id="result_l">{{ resultVal }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { BMPGL } from '../utils/loadBmap.js';

const ak = ref('I72rPifNx4u2xsrk1bc3MW19k7zne3aM');
const resultVal = ref('');
const cityVal = ref('周口市川汇区中州颐和酒店');
onMounted(() => {
  initMap();
});
const initMap = () => {
  BMPGL(ak.value)
    .then((BMapGL) => {
      // 创建地图实例
      const map = new BMapGL.Map('bmapgl');
      // 创建点坐标 axios => res 获取的初始化定位坐标
      const point = new BMapGL.Point(121.548085, 31.243283);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 19);
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      const scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      const zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
      const cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
      map.addControl(cityCtrl);
      const locationControl = new BMapGL.LocationControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        // 控件基于停靠位置的偏移量（可选）
        offset: new BMapGL.Size(20, 20)
      });
      // 将控件添加到地图上
      map.addControl(locationControl);
      locationControl.addEventListener('locationSuccess', function (e) {
        let address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert('当前定位地址为：' + address);
      });
      locationControl.addEventListener('locationError', function (e) {
        console.log(e);
        alert(e.message);
      });
      // 页面加载获取定位;
      const geolocation = new BMapGL.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          const mk = new BMapGL.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          alert('是否跳转到您的位置：' + r.point.lng + ',' + r.point.lat);
        } else {
          alert('failed' + this.getStatus());
        }
      });
      const geoc = new BMapGL.Geocoder();
      // geoc.getPoint(
      //   `${cityVal.value}`,
      //   function (point) {
      //     if (point) {
      //       map.centerAndZoom(point, 16);
      //       map.addOverlay(new BMapGL.Marker(point, { title: `${cityVal.value}` }));
      //     } else {
      //       alert('您选择的地址没有解析到结果！');
      //     }
      //   },
      //   '周口市'
      // );
      // geoc.getPoint(
      //   `周口市川汇区文昌大道韩庄`,
      //   function (point) {
      //     if (point) {
      //       map.centerAndZoom(point, 16);
      //       map.addOverlay(new BMapGL.Marker(point, { title: `周口市川汇区文昌大道韩庄` }));
      //     } else {
      //       alert('您选择的地址没有解析到结果！');
      //     }
      //   },
      //   '周口市'
      // );
      map.addEventListener('click', function (e) {
        //清除地图上所有的覆盖物
        map.clearOverlays();
        console.log(e);
        const pt = e.latlng;
        const marker = new BMapGL.Marker(new BMapGL.Point(pt.lng, pt.lat));
        map.addOverlay(marker);
        geoc.getLocation(pt, function (rs) {
          const addComp = rs.addressComponents;
          resultVal.value =
            addComp.province +
            ', ' +
            addComp.city +
            ', ' +
            addComp.district +
            ', ' +
            addComp.street +
            ', ' +
            addComp.streetNumber;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style lang="scss" scoped>
.boxView {
  width: 100%;
  height: 100%;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 0px 5px 8px 0px rgba(89, 96, 199, 0.09);
  overflow: hidden;
  #result {
    position: fixed;
    top: 70px;
    left: 280px;
    padding: 0px 7px;
    min-width: 350px;
    height: 70px;
    line-height: 35px;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
    border-radius: 7px;
    z-index: 99;
    font-size: 14px;
  }
}
.bmapgl {
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  z-index: 1;
}
</style>
