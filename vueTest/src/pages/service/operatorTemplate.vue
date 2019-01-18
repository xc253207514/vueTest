<template>
	<div>
		<div class="head"  >
			<div class="logo">
				<i class="iconLeft"></i>
				<i class="iconRight" @click="dialogTableVisible = true"></i>
			</div>
			<div v-if="this.newImgs.length >= 1">
				<div class="swiper-container">
			        <div class="swiper-wrapper" >
			           	<div class="swiper-slide" v-for=" img in newImgs"><img :src="img" alt="" width="100%"></div>
			        </div>
<!-- 			        <div class="swiper-button-next swiper-button-white "></div>
				    <div class="swiper-button-prev swiper-button-white "></div> -->
				    <div class="swiper-pagination"></div>
			    </div>
			</div>
			<div v-else>
				<img :src="this.newContain.Banner" alt="" style="background-size:cover;width:100%">
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
			<!-- <dl>
				<dt>筷子基和樂坊宏興大廈23號J鋪</dt>
				<dd class="line"></dd>
				<dd>電話：66317638 【阿強】</dd>
				<dd>微信：jay93632</dd>
			</dl> -->	
		</div>
		<div class="main">
			<ul>
				<li><img src="../../assets/img/operatorT1.png" alt="" ></li>
				<li><img src="../../assets/img/operatorT2.png" alt="" ></li>
				<li class="li1">G+ CUT拥有超过70000个,涵盖车身,内饰大灯等组件,全方位满足您的各类商业要求;G+ CUT拥有专业数据研发团队,并于全球领先数据公司结成战略合作,紧跟车辆更新趋势,同步研发市场热门中高端车型数据;</li>
				<li><img src="../../assets/img/operatorT3.png" alt="" ></li>
				<li><img src="../../assets/img/operatorT4.png" alt="" ></li>
				<li class="li1">
					G+中国总部隶属上海东法贸易有限公司，公司位于上海市闵行区，专注于漆面透明保护膜产品在国内市场的经营销售与连锁加盟事情的发展，综合国内汽车后市场服务的现状与特点，推出丰富的产品类别，制定合理的营销模式，提供专业的技术指导与品牌的推广支持，致力打造线上与线下的结合用于完善品牌服务。
				</li>
				<li>
					<img :src="this.newEven.DetailImg_App" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>	
<style lang="scss" scoped>
	@import '../../assets/css/swiper-3.4.2.min.css';
	@import '../../assets/css/mixin';
	.swiper-container {
        width: 100%;
        height: 252px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
       img{
       		@include wh(100%,auto)
       }
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
	.it{
		display:block;
		border-bottom: 0.05rem solid #ccc;
		padding-left: 2rem;
		height: 1.6rem;
    	line-height: 1.6rem;
	}
	.head{
		@include wh(100%,12.45rem);
		// background:url('../../assets/img/contact1.png') no-repeat;
		background-size:cover;
		position:relative;
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
			position:absolute;
			z-index:1000;
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
		// dl{
			// padding-left:1.8rem;
			// padding-top:3.625rem;
			// dt{
			// 	@include sc(1rem,#ffffff);	
			// 	font-weight:bolder;
			// 	padding-bottom:0.45rem;
			// }
			// dd{
			// 	@include sc(0.65rem,#ffffff);
			// 	margin-bottom:0.4rem;
			// }
			// .line{
			// 	@include wh(4rem,0.05rem)
			// 	background-color:#fff;
			// }
		// }
		
	}
	.main{
		ul{
			.li1{
				background-color:#fff;
				line-height:1.2rem;
				padding:0.65rem 1.325rem 1.35rem 1.075rem;
				@include sc(0.675rem,#9d9d9d)
			}
			img{
				width:100%;
				display:block
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
</style>
<script>
	import Swiper from '../../assets/js/swiper-3.4.2.min.js'	
	import {getSite} from '../../config/data-service'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        websiteId:'',
		        newContain:{},
		        newEven:{},
		        newImgs:[]
			}
		},
		mounted(){
			this.websiteId =this.$route.query.siteId;
			getSite(this.websiteId).then(res =>{
					this.newEven = res;
					this.newContain = res.Banner_App;
					this.newImgs=this.newContain.split(';');
					console.log(this.newImgs)
				}).then(()=>{
					this.initSwiper();
				})
			
		},
		methods:{
			initSwiper:function(){
				var galleryTop = new Swiper('.swiper-container', {
			        direction: 'horizontal',
					loop: true,
					autoplay: 1000,
					pagination: '.swiper-pagination',
			    });	
			}
		}
	}
</script>
