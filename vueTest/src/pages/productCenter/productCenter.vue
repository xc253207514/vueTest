<template>
	<div>
		<div class="head">
			<div class="logo">
				<i class="iconLeft"></i>
				<i class="iconRight" @click="dialogTableVisible = true"></i>
			</div>
			<el-dialog  :visible.sync="dialogTableVisible" fullscreen>
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
			<ul>
				<li><h2>产品中心<i>Product Center</i></h2></li>
				<li><img src="../../assets/img/center2.jpg" alt=""></li>
				<li><img src="../../assets/img/center3.jpg" alt=""></li>
				<li><img src="../../assets/img/center4.jpg" alt=""></li>
				<li class="carTitle">装车展示—视频</li>
				<li class="carVideo">
					<video-player   :options="{ 
					muted: true,
		          	language: 'en',
		          	playbackRates: [0.7, 1.0, 1.5, 2.0],
		           	sources: [{
		            	type: 'video/mp4',
		            	src: videoSrc 
		          	}]}" >
					</video-player>	
				</li>
				<li class="carTitle">装车展示—图片</li>
				<li style="padding-bottom:1.4rem">
				    <div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<img src="../../assets/img/center5.png" alt="">
							</div>
							<div class="swiper-slide" >
								<img src="../../assets/img/center6.png" alt="">	
							</div>
							<div class="swiper-slide" >
								<img src="../../assets/img/center7.png" alt="">	
							</div>
							<div class="swiper-slide" >
								<img src="../../assets/img/center5.png" alt="">	
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</li>
			</ul>
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
	@import '../../assets/css/swiper-3.4.2.min.css';
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
		background:url('../../assets/img/center1.png') no-repeat;
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
		
	}
	.main{
		ul{
			padding:0.925rem 0.75rem 0.0rem;
			background-color:#fff;
			li{
				h2{
					@include sc(0.9rem,#636262);
					font-weight:bold;
					padding-bottom:0.7rem;
					i{
						font-style:italic;
						font-size:0.6rem;
					}
				}
				img{
					@include wh(100%,auto);
				}
				.vi{
					@include wh(100%,10rem);
				}
			}
			.carTitle{
				@include sc(0.9rem,#4b4b4b);
				font-weight:bold;
				padding-top: 0.4rem;
			}

		}
		
	}
	.foot{
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
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 100px;
		margin: 0;
	}
	  
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	  
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	 .swiper-container {
        @include wh(100%, 156px);
		overflow: hidden;
    }
    .swiper-container .swiper-slide {
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-container .swiper-slide > img{
        @include wh(100%, 100%);
    }
</style>
<script>
	import Swiper from '../../assets/js/swiper-3.4.2.min.js'
	export default{
		data(){
			return{
				videoSrc:'http://owm942fyj.bkt.clouddn.com/G+protection.mp4',
		        dialogTableVisible: false
			}
		},
		mounted(){
			this.initSwiper();
		},
		methods:{
			initSwiper: function(){
				var banner = new Swiper ('.swiper-container', {
					direction: 'horizontal',
					loop: true,
					autoplay: 3000,
					pagination: '.swiper-pagination',
					autoplayDisableOnInteraction: false,
					lazyLoading : true
				});
			}
		}
	}
</script>
