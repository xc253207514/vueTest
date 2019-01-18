<template>
	<div>
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
		<scroller :on-infinite="infinite" ref="my_scroller" :on-refresh="refresh" noData="">
		<div class="head">
			<div class="logo">
				<i class="iconLeft"></i>
				<i class="iconRight" @click="dialogTableVisible = true"></i>
			</div>	
		</div>
		<div class="main">
			<ul>
				<li><h2>图文案例<i>Graphic case</i></h2></li>
				<li v-for="(img,id) in newImgs">
					<div class="swiper-container" >
				        <div class="swiper-wrapper">
				           	<div class="swiper-slide" v-for="(s,index) in img.Imgs"><img :src="s" alt="" width="100%"></div>
				        </div>
				        <!-- Add Arrows -->
				        <div class="swiper-pagination"></div>
					</div>
				    <div class="title">{{img.ImgCase.Title}}</div>
				</li>
			</ul>
		</div>		
	</scroller>
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
		background:url('../../assets/img/imageText1.png') no-repeat;
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
				position:relative;
				margin-bottom:0.5rem;
				h2{
					@include sc(0.9rem,#636262);
					font-weight:bold;
					padding-bottom:0.7rem;
					i{
						font-style:italic;
						font-size:0.6rem;
						padding-left:0.5rem;
					}
				}				
			}
			.title{
				position:absolute;
				right:1rem;
				bottom:2.5rem;
				z-index:10000;
				@include sc(0.75rem,#fff)
				width: 100%;
   				 text-align: right;
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
        width: 100%;
        height: 220px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
       img{
       		@include wh(100%,auto)
       }
    }
    // .gallery-top {
    //     height: 80%;
    //     width: 100%;
    // }
    // .gallery-thumbs {
    //     height: 20%;
    //     box-sizing: border-box;
    //     padding: 10px 0;
    // }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
     
</style>
<script>
	import Swiper from '../../assets/js/swiper-3.4.2.min.js'
	import {imgInfor} from '../../config/data-service'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        count:2,
		        pageNumber:1,
		        newImgs:[],
		        newSrc:[],
		        newIm:[],
		        loadOver:false,
		        total:'',
		        newArray:[],
			}
		},	
		mounted(){
			this.$refs.my_scroller.finishInfinite(true);
			imgInfor(this.count,this.pageNumber).then(res =>{
				this.newImgs = res.QueryImgCaseList;
				this.total = res.Count;	
				if(this.newImgs.length < this.total){
					this.loadOver = true; 
				}
				console.log(this.newImgs)
		    }).then(()=>{
		    	this.initSwiper();	
			})   			    
		},
		methods:{
			infinite(done){
          		 setTimeout(()=>{
					if (!this.loadOver) {
						done(true);
					}
					this.pageNumber++;
					imgInfor(this.count, this.pageNumber).then(res=>{
							this.newArray = res.QueryImgCaseList;
							console.log(this.newArray);
							// for(let i=0;i<this.newImgs.length;i++){
							// 	console.log(this.newImgs[i].Imgs)
							// 	this.newSrc.push(this.newImgs[i].Imgs.split(';'));
							// }
					});
					this.newImgs = this.newImgs.concat(this.newArray);
					this.initSwiper();
					console.log(this.newImgs);
					if(this.newImgs.length >= this.total){
						this.loadOver = false;
						done(true);
						return;
					}
					done();
				},1500)
			},
			refresh(done){
				setTimeout(()=>{
					done();
				},1500)	
			},
			initSwiper:function(){
				var galleryTop = new Swiper('.swiper-container', {
		    		initialSlide :0,
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        pagination : '.swiper-pagination',
			        spaceBetween: 10,
			        observer:true,//修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			    	onSlideChangeEnd: function(swiper){ 
							swiper.update();  
							// galleryTop.startAutoplay();
					// 　　    galleryTop.reLoop;  
					}
			    });
			}
		},

	}
</script>
