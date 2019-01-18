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
			<dl>
				<dt>品牌资讯<i>Brand information</i></dt>
				<router-link tag="dd" :to="{path:'/brandTemplate', query:{brandId: brand.ID}}" v-for="brand in brands" key="brand" class="brandNews">
					<div class="pic">
						<!-- <img :src="brand.BannerImg" alt="" > -->
						<img src="../../assets/img/brand1.png" alt="">
					</div>
					<ul style="padding-left:0.625rem;width:58%">
						<li class="li1">{{brand.Title}}</li>
						<li class="li2"><i class="rili"></i><i class="shijian">{{createTime}}</i></li>
						<li class="li3">{{brand.Intro}}</li>
					</ul>
				</router-link>				
			</dl>
		</div>
		</scroller>	
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
		background:url('../../assets/img/brand2.png') no-repeat;
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
		background-color:#fff;
		dl{
			padding:0.925rem 0.75rem 0px;
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
			.brandNews{
				display:flex;
				flex-direction: row;		
			}
			.pic{
				@include wh(6.75rem,7.0rem);
				img{
					@include wh(6.75rem,7.0rem);
				}
  			}
  			.li1{
  				@include sc(0.8rem,#565656);
  				font-weight:bold;
  				padding-bottom:0.4rem;
  			}
  			.li2{
  				@include sc(0.7rem,#d5d5d5);
  				.rili{
	  				display:inline-block;
	  				@include wh(1rem,0.9rem)
	  				background-image:url('../../assets/img/rili.png');
	  				background-size:cover;
  				}
  				.shijian{
  					position:relative;
  					bottom: 0.1rem;
    				left: 0.5rem;
    				color: #d5d5d5;
  				}
  			}
  			.li3{
  				@include wh(9.9rem,4.5rem);
  				overflow:hidden;
  				line-height:1.1rem;
  				@include sc(0.55rem,#797979)
  			}
  			
		}
	}
</style>
<script>
	import {brandMsg} from '../../config/data-service'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        brands:[],
		        createTime:'',
		        newArray:[],
		        noData:'',
		        count:3,
		        pageNumber:1,
		        total:'',
		        loadOver:false
			}
		},
		mounted(){
			this.$refs.my_scroller.finishInfinite(true);
			brandMsg(this.count,this.pageNumber).then(res =>{
				this.brands = res.QueryBrandNewsList;
				this.total = res.Count;
				if(this.brands.length < this.total){
					this.loadOver = true; 
				}
				for(let t=0;t<this.brands.length;t++){
					this.createTime = this.brands[t].CreateTime.substring(0, this.brands[t].CreateTime.indexOf('T'));
				}
			})
		},
		methods:{
			infinite(done){
          		 setTimeout(()=>{
					if (!this.loadOver) {						
						// return;
						done(true);
						// console.log(1);
					}
					// if(this.pageNumber>){

					// }
					this.pageNumber++;
					console.log(this.pageNumber)
					brandMsg(this.count, this.pageNumber).then(res=>{
							this.newArray = res.QueryBrandNewsList;
					});
					// console.log(res.QueryBrandNewsList+"..."+this.activitys)
					this.brands = this.brands.concat(this.newArray)
					// console.log(this.activitys);
					if(this.brands.length >= this.total){
						this.loadOver = false;
						done(true);
						return;
					}
					done();
				},1000)
			},
			refresh(done){
				setTimeout(()=>{
					done();
				},1500)	
			}
		}

	}
</script>