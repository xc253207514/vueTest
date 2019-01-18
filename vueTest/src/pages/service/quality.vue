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
				<li><h2>质保查询<i>Warranty inquiries</i></h2></li>
				<li class="li1">
					<p>G+质保查询 — 10年超长质保，伴您无忧驾驶</p>
					<p>
						<input type="text" v-model="inputNumber"  placeholder="牌照号/手机号/车架号/模卷号">
						<router-link :to="{path:'/qualityResult',query:{carNumber:inputNumber}}" tag="button" >质保查询</router-link>
					</p>
				</li>
				<li class="li2">温馨提示</li>
				<li class="li3">尊敬的客户：感谢您选择美国G+漆面透明保护膜保护您的爱车，G+漆面保护膜以其卓越的产品性能，保持您的爱车光亮如新，最大限度保护您的漆面免受划痕之忧，尊享驾驶新车每一天。</li>
				<li class="li4 attation">注意事项</li>
				<li class="li4">1：由于膜胶层完全粘固需要时间，所以施工完毕后一星期内不可高压水洗车，可用软布湿洗表面。</li>
				<li class="li4">2：由于车身各部位弧度大小各异，弧度大造成膜层粘附力低，边角容易二次起边起泡。请在施工完毕后一周内返回施工店进行复检，确保完美施工质量。</li>
				<li class="li4" style="padding-bottom:1.5rem">3：若作婚车用途，婚车装饰时，禁止使用强力吸盘吸附膜面表层，遇到雨雪天气时，若有鞭炮，礼花弹等物质洒落在车漆表面请立即清除，防止雨水长时间浸泡导致膜面染色。</li>
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
		background:url('../../assets/img/quality1.png') no-repeat;
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
				
			}
			.li1{
				@include wh(17.25rem,8.4rem);
				background:url('../../assets/img/queryBox.png');
				p{
					@include sc(0.8rem,#ffffff);
					text-align:center;
					padding-top:1.4rem;
					input{
						@include wh(11.125rem,1.625rem);
						text-align:center;
						font-size:0.7rem;
						margin:0.925rem auto;
						border:0px;
					}
					button{
						@include wh(3.75rem,1.625rem);	
						@include sc(0.7rem,#636262)
					}
				}
			}
			.li2{
				@include sc(1.0rem,#fbbd07);
				padding-top:1.575rem;
				padding-bottom:0.6rem;
			}
			.li3{
				@include sc(0.75rem,#575757);
				line-height:1.25rem;
			}
			.attation{
				padding-top:1.3rem;
			}
			.li4{
				@include sc(0.7rem,#575757);
				line-height:1.25rem;
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

	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        inputNumber:'',
			}
		},
	}
</script>
