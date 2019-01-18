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
				<!-- <img :src="this.psc"> -->
				<li><h2>视频案例<i>Video case</i></h2></li>
				<li class="li1">
					<video-player v-for="player in players"  :key="player.Id" :options="{ 
					muted: true,
		          	language: 'en',
		          	playbackRates: [0.7, 1.0, 1.5, 2.0],
		           	sources: [{
		            	type: 'video/mp4',
		            	src: player.Url 
		          	}],
		          	poster:player.Img_App
		          }"  style="width:100%;height:10rem;margin-bottom:0.5rem;">
					</video-player>	
				</li>
			</ul>
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
		background:url('../../assets/img/videoCase.jpg') no-repeat;
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
				@include wh(100%,auto)
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
 	import {videoInfor} from '../../config/data-service'
	export default{
		data(){
			return{
				count:3,
				pageNumber:1,
				players:[],
		        dialogTableVisible: false,
		        loadOver:false,
		        newArray:[],
		        total:'',
			}
		},
		mounted(){

			// console.log(this.playerOptions.sources[0].src)
			this.$refs.my_scroller.finishInfinite(true);
			videoInfor(this.count,this.pageNumber).then(res=>{
				this.players = res.QueryVideoCaseList;
				this.total = res.Count;
				if(this.players.length < this.total){
					this.loadOver = true; 
				}
			})
		},
		methods:{
			infinite(done){
          		 setTimeout(()=>{
					if (!this.loadOver) {						
						done(true);
					}
					this.pageNumber++;
					console.log(this.pageNumber)
					videoInfor(this.count, this.pageNumber).then(res=>{
							this.newArray = res.QueryVideoCaseList;
					});
					// console.log(res.QueryBrandNewsList+"..."+this.activitys)
					this.players = this.players.concat(this.newArray)
					// console.log(this.activitys);
					if(this.players.length >= this.total){
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



