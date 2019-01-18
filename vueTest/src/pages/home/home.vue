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
			<div class="slog"></div>
			<div style="position:relative">
				<video :src="videoSrc"  class="vi" ref="videoWay" :poster="poster" >	
				</video>
				<div :class="{playIcon:plays,playCon:show,hidd: isPlay }"  @click="playClick"></div>
			</div>
		</div>
		<div><img src="../../assets/img/main1.jpg" alt="" width="100%"></div>
		<div><img src="../../assets/img/main2.jpg" alt="" width="100%"></div>
		<div class="consultation">
			<h2>G+资讯</h2>
			<router-link to="/activityInfor">
				<img src="../../assets/img/constract.jpg" alt="" width="93%">
			</router-link>
		</div>
		<div class="consultation case">
			<h2>案例鉴赏</h2>
			<router-link to="/imageTextNews">
				<img src="../../assets/img/case.jpg" alt="" width="93%">
			</router-link>
		</div>
		<div class="consultation query">
			<h2>质保查询</h2>
			<div class="queryBox">
				<p>G+质保查询 — 10年超长质保，伴您无忧驾驶</p>
				<router-link to="/quality" tag='button'>查询</router-link>
			</div>
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
		@include wh(100%,14.9rem);
		background:url('../../assets/img/banner.png') no-repeat;
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
			left:4.9rem;
			top:1.9rem;
			opacity:1;
			transition:opacity 2s;
			
		}
		.playCon{
			opacity:0;
		}
		.hidd{
			// opacity:0;
			background:url('../../assets/img/pause.png') no-repeat;
			left:4.9rem;
			top:1.9rem;
		}
	}
	.consultation{
		padding-left:0.75rem;
		padding-top:1.45rem;
		h2{
			font-weight: bold;
   			padding-bottom: 0.6rem;
		}
		.queryBox{
			@include wh(93%,7.5rem);
			background:url('../../assets/img/queryBox.png');
			display:flex;
			flex-direction:column;
			p{
				@include sc(0.8rem,#ffffff);
				text-align:center;
				padding-top:1.4rem;
			}
			input{
				@include wh(75%,1.2rem);
				text-align:center;
				margin:0.925rem auto;
				@include borderRadius(4px);
			}
			button{
				@include wh(40%,1.8rem);
				margin:0 auto;
				background-color:#fbbd07;
				@include borderRadius(3px);
				color:#fff;
				margin-top:2rem;
				font-size:1rem;
			}
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
	import ter from '../../assets/img/poster.png'
	export default{
		data(){
			return{
				videoSrc:'http://owm942fyj.bkt.clouddn.com/G+protection.mp4',
				poster:ter,
		        dialogTableVisible: false,
		        isPlay:false,
		        playStatus:'',
		        isPlay:false,
		        n:'1',
		        plays:true,
		        show:false,
		        ts:true

			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			playClick(){
				this.show = false;
            	this.isPlay = !this.isPlay;
            	// this.playStatus= 'autoplay';
            	this.n++;
            	if(this.n % 2 == 0){
            		this.$refs.videoWay.play();
            	}else{
            		this.$refs.videoWay.pause();
            		setTimeout(()=>{
            			this.show = true;
            		},1500)
            	}         	
        	},
            imgClick(){
           		this.ts = false;
            }
		}
	}
</script>	