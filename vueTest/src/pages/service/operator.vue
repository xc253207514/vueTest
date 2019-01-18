<template>
	<div>
		<div class="head">
			<div class="logo">
				<i class="iconLeft"></i>
				<i class="iconRight" @click="dialogTableVisible = true"></i>
			</div>
			<el-dialog :visible.sync="dialogTableVisible" fullscreen>
				<router-link tag="span" to="/home" class="headPage">首页</router-link>
				<Collapse  accordion>
			        <Panel name="1">
			            品牌文化
			            <p slot="content" class="margin-bottom:5px;"><router-link to="/companyIntro" class="it">公司介绍</router-link></p>
			            <p slot="content" class="margin-bottom:5px;"><router-link to="/contactUs" class="it">联系我们</router-link></p>
			        </Panel>
			        <Panel name="2">
			            G+资讯
			            <p slot="content"><router-link to="/brandInfor" class="it">品牌资讯</router-link></p>
			            <p slot="content"><router-link to="/activityInfor" class="it">活动资讯</router-link></p>
			        </Panel>
			        <Panel name="3">
			            产品中心
			            <p slot="content"><router-link to="/productCenter" class="it">G + 90</router-link></p>
			            <p slot="content"><router-link to="/productCenter" class="it">G + 70</router-link></p>
			            <p slot="content"><router-link to="/productCenter" class="it">G + 60</router-link></p>
			        </Panel>
			        <Panel name="4">
			            VIP服务
			            <p slot="content"><router-link to="/quality" class="it">质保查询</router-link></p>
			            <p slot="content"><router-link to="/operator" class="it">运营商查询</router-link></p>
			            <p slot="content"><router-link to="/aimToCar" class="it">专车专用</router-link></p>
			        </Panel>
			        <Panel name="5">
			            案例鉴赏
			            <p slot="content"><router-link to="/imageTextNews" class="it">图文案例</router-link></p>
			            <p slot="content"><router-link to="/videoNews" class="it">视频案例</router-link></p>
			        </Panel>
			    </Collapse>			
			</el-dialog>	
		</div>
		<div class="main">
			<dl>
				<dt>经销商查询<i>Dealer query</i></dt>
				<dd class="tip">(tip:请按顺序输入您想查询的地址喲)</dd>
				<dd>
					<el-select placeholder="请选择国家" v-model="country">
						<el-option v-for="option in countryArr"  :value="option">{{option}}</el-option>	
					</el-select>
					<el-select v-model="pro" placeholder="请选择省份">
						<el-option v-for="option in proArr"  :value="option">{{option}}</el-option>	
					</el-select>
					<el-select v-model="city" placeholder="请选择城市">
						<el-option v-for="option in cityArr"  :value="option">{{option}}</el-option>	
					</el-select>
					<el-select v-model="area" placeholder="请选择区域">
						<el-option v-for="option in areaArr"  :value="option">{{option}}</el-option>	
					</el-select>
				</dd>
				<dd style="padding-bottom: 0.5rem;"><el-button @click="getOperator" type="primary">点击查询</el-button></dd>
				<dd style="width: 100%; height: 9rem; position: relative; "><div style="width: 100%; height: 9rem;" id="container" class="map"></div></dd>
			</dl>
			<Collapse  accordion>
			        <Panel name="" v-for="(comp,index) in comArr" :key="index">
			            {{comp.Partner.Name}}
			            <ul slot="content" style="padding:0px 0.75rem">
			            	<li style="padding:0.5rem 0.0rem"></li>
			            	<li><img src="../../assets/img/operator1.png" alt="" class="operatorPic"></li>
			            	<li class="way">联系电话:{{comp.Partner.Contact}}</li>
			            	<li class="way">详细地址:{{comp.Partner.Address}}</li>
			            	<router-link class="way enter" :to="{path:'/operatorTemplate',query:{siteId:comp.HomePageInfo.Pid}}" tag="li" v-if="comp.HomePageInfo != null && comp.HomePageInfo.Type ==2 ">进入官网</router-link>
			            	<router-link @click="window.location.on=''" v-else-if="comp.HomePageInfo != null && comp.HomePageInfo.Type ==1">进入官网</router-link>
			            	<router-link class="way enter" style="background-color:#c3a03b" to="" tag="li" v-else>官网筹建中..</router-link>
			            </ul>			           
			        </Panel>
			</Collapse>	        
		</div>
		<div class="foot"  >
			<el-collapse accordion>
				<el-collapse-item title="品牌文化" name="1">
					<ul class="content">
						<router-link to="/companyIntro" tag="li">公司介绍</router-link>
						<router-link to="/contactUs" tag="li">联系我们</router-link>
					</ul>
			    </el-collapse-item>
			    <el-collapse-item title="G+资讯" name="2">
			    	<ul  class="content">
			    		<router-link to="/brandInfor" tag="li">品牌资讯</router-link>
			    		<router-link to="/activityInfor" tag="li">活动资讯</router-link>
			    	</ul>	
			    </el-collapse-item>
			    <el-collapse-item title="产品中心" name="3">
			    	<ul  class="content">
			    		<router-link to="/productCenter" tag="li">G + 90</router-link>
						<router-link to="/productCenter" tag="li" style="border-bottom:0.05rem solid #525252;">G + 70</router-link>
						<router-link to="/productCenter" tag="li" style="border-bottom:0rem solid #525252;">G + 60</router-link>
			    	</ul>
			    </el-collapse-item>
			    <el-collapse-item title="VIP服务" name="4">
			    	<ul  class="content">
			    		<router-link to="/quality" tag="li">质保查询</router-link>
			    		<router-link to="/operator" tag="li" style="border-bottom:0.05rem solid #525252;">运营商查询</router-link>
			    		<router-link to="/aimToCar" tag="li" style="border-bottom:0rem solid #525252;">专车专用</router-link>
			    	</ul>
			    </el-collapse-item>
			    <el-collapse-item title="案例鉴赏" name="5">
			    	<ul  class="content">
			    		<router-link to="/imageTextNews" tag="li">图文案例</router-link>
			    		<router-link to="/videoNews" tag="li">视频案例</router-link>
			    	</ul>
			    </el-collapse-item>
			</el-collapse>	
			<div class="footMsg clear">
				<ul class="ul1">
					<li style="height:1.3rem;margin-bottom:1.575rem"><img src="../../assets/img/logo.png" alt="" ></li>
					<li>服务热线：400-821-9001</li>					
					<li>Copyright © 2017 上海东法贸易有限公司</li> 
					<li>保留一切权利 © 沪ICP备17012446号-1 </li>
				</ul>
				<ul class="ul2">
					<li><img src="../../assets/img/qrcode.png" alt=""></li>
				</ul>
			</div>
		</div>
	</div>
</template>	
<style lang="scss" scoped>
	@import '../../assets/css/mixin';
	.it{
		display:block;
		border-bottom: 0.05rem solid #ccc;
		padding-left: 2rem;
		height: 1.6rem;
    	line-height: 1.6rem;
	}
	.head{
		@include wh(100%,12.45rem);
		background:url('../../assets/img/operatorBan.jpg') no-repeat;
		background-size:cover;
		li{
			@include wh(100%,2.125rem)
			line-height:2.125rem;
			border-bottom:0.05rem solid #525252;
			background-color:#dcdcdc;
			padding-left:1rem;
			&:nth-of-type(2){
				border-bottom:0rem solid #525252;
			}
		}
		.logo{
			display:flex;
			flex-direction:row;
			padding-top:0.75rem;
			padding-left:0.875rem;
			.iconLeft{
				@include wh(9.425rem,1.25rem);
				background:url('../../assets/img/logo.png') no-repeat;
				background-size:cover;
			}
			.iconRight{
				@include wh(1.175rem,0.85rem);
				background:url('../../assets/img/menu.png') no-repeat;
				background-size:cover;
				margin-left:6rem;
			}

		}
		.slog{
			@include wh(9.575rem,1.125rem);
			background:url('../../assets/img/slog.png') no-repeat;
			background-size:cover;
			margin-left:2.075rem;
			margin-top:2.15rem;
		}
		.vi{
			@include wh(8.55rem,5.0rem);
			margin-top:0.75rem;
			margin-left:2.075rem;
			// position:relative;
		}
		.playIcon{
			position:absolute;
			@include wh(8.55rem,5.0rem);
			background:url('../../assets/img/playIcon.png') no-repeat;
			left:4.6rem;
			top:1.6rem;
		}
	}
	.main{
		dl{
			padding:0.925rem 0.75rem 0.0rem;
			dt{
				@include sc(0.9rem,#636262);
				font-weight:bold;
				padding-bottom:0.7rem;
				i{
					font-style:italic; 
					font-size:0.6rem;
					padding-left:0.4rem;
				}
			}
			dd{
				.amap{
					@include wh(100%,11.45rem)
				}
			}
			.msgDetail{
				@include sc(0.7rem,#4b4b4b);
				line-height:1.325rem;
			}
			.tip{
				@include sc(0.7rem,#aaa);
				padding-bottom:0.5rem;
			}
		}
		ul{
			li{
				.operatorPic{
					@include wh(100%,auto)
				}
			}
		}
		.way{
			@include sc(0.7rem,#4b4b4b);
			padding: 0.1rem 0px 0.3rem;
		}
		.enter{
			@include sc(0.7rem,#fff);
			background-color:#fbbd07;
			@include borderRadius(4px);
			@include wh(6rem,auto);
			text-align:center;
		    margin-bottom: 0.5rem;	
		}
	}
	.foot{
		margin-top:2.05rem;
		.content{
			width:100%;
			li{
				@include wh(100%,2.125rem)
				line-height:2.125rem;
				border-bottom:0.05rem solid #525252;
				background-color:#dcdcdc;
				padding-left:1rem;
				&:nth-of-type(2){
					border-bottom:0rem solid #525252;
				}
			}
		}
		.footMsg{
			background-color:#272727;
			ul{
				float:left;
				@include sc(0.68rem,#fff);
				transform:scale(0.9);
				li{
					color:#fff;
				}
			}
			.ul1{
				width:13.2rem;
				padding-top:1.85rem;
				padding-bottom:1.25rem;
				img{
					width:100%;
					height:auto;
				}
			}
			.ul2{
				padding-top:3rem;
				img{
					@include wh(5rem,5rem)
    				margin-bottom: 0.01rem
				}
			}
		}
		
	}
</style>
<script>
	import {getCountry,getPro,getCity,getArea,queryOperator} from '../../config/data-service'
	import remoteLoad from '../../assets/js/remoteLoad.js'
	import fetch from '../../config/fetch'
	// import mapDrag from '../../components/mapDrag'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        country:'',
		        countryArr:[],
		        pro:'',
		        proArr:[],
		        city:'',
		        cityArr:[],
		        area:'',
		        areaArr:[],
		        comArr:[],//查询到的公司全部信息
		        addresArr:[] //公司地址集合
		        
			}
		},
  		async created () {
    		// 已载入高德地图API，则直接初始化地图
    		if (window.AMap && window.AMapUI) {
      			this.initMap()
    			// 未载入高德地图API，则先载入API再初始化
    		} else {
      			await remoteLoad('http://webapi.amap.com/maps?v=1.4.1&key=c5178272e19f11ec5ccf3683ee19c94e&plugin=AMap.Geocoder')
      			await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      			this.initMap()
    		}
  		},
		mounted() {
			this.updateCountry();
			this.updatePro();
			this.updateCity();
			this.updateArea();
			this.initMap();


		},
		methods: {
	      	updateCountry: function () {
	      		// this.pro  = '';
	      		// this.city = '';
	      		// this.area = '';
				getCountry().then(res=>{
					this.countryArr = res;
				})
			},
			updatePro:function(){
				this.pro  = '';
				this.city = '';
	      		// this.area = '';
				getPro(this.country).then(res=>{
					console.log(res)
					this.proArr =res;
				})
			},
			updateCity:function(){
				this.city = '';
	      		this.area = '';
				getCity(this.country,this.pro).then(res =>{
					console.log(res)
					this.cityArr = res;
				})
			},
			updateArea:function(){
				getArea(this.country,this.pro,this.city).then(res =>{
					console.log(res)
					this.areaArr = res;
				})
			},
			getOperator:function(){
				// this.addresArr = []; 
				queryOperator(this.country,this.pro,this.city,this.area).then(res =>{
					// console.log(res)
					this.comArr = res;
					this.addresArr =[];
					for(var i=0;i<res.length;i++){
						this.addresArr.push(res[i].Partner.Address)
					}
					console.log(this.addresArr)
				}).then(()=>{
					this.initMap();
				})
			},
			initMap(){
				var map = new AMap.Map("container", {
        			resizeEnable: true,
        			center: [116.41, 39.91]
   				});
   				for(let i=0;i<this.addresArr.length;i++){
   					geocoder(this.addresArr[i]) ;
   				}
   				function geocoder(add) {
   					console.log(add)
		            var geocoder = new AMap.Geocoder({
		                // city: "0512", //城市，默认：“全国”
		                radius: 1000 //范围，默认：500
		            });
		            //地理编码,返回地理编码结果
		            // console.log(this.addresArr)
		            
		            geocoder.getLocation(add, function(status, result) {
		                if (status === 'complete' && result.info === 'OK') {
		                    geocoder_CallBack(result);
		                }
		            });
		        }
		        function addMarker(i, d) {
		            var marker = new AMap.Marker({
		                map: map,
		                position: [ d.location.getLng(),  d.location.getLat()]
		            });
		            var infoWindow = new AMap.InfoWindow({
		                content: d.formattedAddress,
		                offset: {x: 0, y: -30}
		            });
		            marker.on("mouseover", function(e) {
		                infoWindow.open(map, marker.getPosition());
		            });
		        }
		        //地理编码返回结果展示
		        function geocoder_CallBack(data) {
		        //     //地理编码结果数组
		            var geocode = data.geocodes;
		            for (var i = 0; i < geocode.length; i++) {
		                addMarker(i, geocode[i]);
		            }
		            map.setFitView();

		        }


			}			
		},
		watch: {
			country: function () {
				this.updatePro();
				this.updateCity();
				this.updateArea();

			},
			pro: function () {
				this.updateCity();
				this.updateArea();

			},
			city:function(){
				this.updateArea();
			}
			
	    }
	}
</script>
