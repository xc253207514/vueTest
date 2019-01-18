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
			<dl>
				<dt>专车专用<i>Special car</i></dt>
				<dd>
					<img v-preview src="../../assets/img/tocar2.png" alt="" >
				</dd>
				<dd class="d1">
					<ul>
						<li class="ddTitle">一次安装，无忧驾驶，安心驰骋</li>
						<li><img src="../../assets/img/tocarline.jpg" alt="" class="line" ></li>
						<li class="carContent" style="padding-bottom:0.5rem;padding-top:0.4rem">G+专车专用：拥有超过70000个种应用方式以上,图样库包括可供所有车辆参考的引擎盖、翼子板、后视镜、前包围和车灯包覆，以及侧裙、车顶、内饰等。</li>
						<li class="carContent">电脑切割——免拆除汽车部件，零风险装贴，提高施工速度70%。专车专用漆面保护膜的数控精准裁切，彻底解决了以往需要在车漆面表部下刀、拆装侧门拉手、前后保险杠的施工环节风险。</li>
						<li class="ddTitle">G + 专车专用</li>
						<li><img src="../../assets/img/tocarline.jpg" alt="" class="line"></li>
						<li><img src="../../assets/img/tocar3.jpg" alt="" style="padding-top:0.75rem"></li>
					</ul>
				</dd>
				<dd>
					<el-carousel :interval="4000" type="card" height="238px" setActiveItem="true" autoplay>
					    <el-carousel-item name="1">
					      <ul>
					      	<li><img src="../../assets/img/tocar01.png" alt="" class="num"></li>
					      	<li class="data">数据齐全</li>
					      	<li class="dataDe">G+ CUT拥有超过70000个,涵盖了车身、内饰、大灯等组件，全方位满足您的各类商业需求。</li>
					      </ul>
					    </el-carousel-item>
					    <el-carousel-item  name="2">
					      <ul>
					      	<li><img src="../../assets/img/tocar02.png"  alt="" class="num"></li>
					      	<li class="data">数据精准</li>
					      	<li class="dataDe">G+ CUT采用最新数据采集设备，对每一款数据在定稿前都会进行反复的实车试验，达到与车身线条紧密贴合才能最终进入数据库。</li>
					      </ul>
					    </el-carousel-item>
					    <el-carousel-item  name="3">
					      <ul>
					      	<li><img src="../../assets/img/tocar03.png" alt="" class="num"></li>
					      	<li class="data">省时省膜</li>
					      	<li class="dataDe">G+ CUT使用智能排版系统对数据进行排版及单独部位裁切，充分利用每一寸空间，大大的减少耗材，同样裁一车膜，G+ CUT可用空隙单独裁切3-4套内饰并较人工节省35%以上膜用料。</li>
					      </ul>
					    </el-carousel-item>
					    <el-carousel-item  name="4">
					      <ul>
					      	<li><img src="../../assets/img/tocar04.png" alt="" class="num"></li>
					      	<li class="data">同步更新</li>
					      	<li class="dataDe">G+ CUT拥有专业数据研发团队，并与国际知名数据公司结成战略合作，紧跟车辆更新趋势，同步研发市场热门中高端车型数据，不仅有美规车型，更有国产加长版车型（北京奔驰C/E；华晨宝马5系）</li>
					      </ul>
					    </el-carousel-item>
					    <el-carousel-item  name="5">
					      <ul>
					      	<li><img src="../../assets/img/tocar05.png" alt="" class="num"></li>
					      	<li class="data">简单易用</li>
					      	<li class="dataDe">G+ CUT使用中文操作环境，操作流程简洁易懂。数据分类明确，可快速掌握电脑裁切。</li>
					      </ul>
					    </el-carousel-item>
					    <el-carousel-item  name="6">
					      <ul>
					      	<li><img src="../../assets/img/tocar06.png" alt="" class="num"></li>
					      	<li class="data">施工'0'风险</li>
					      	<li class="dataDe">简单操作后便可紧密贴合车身部位，无需车上动刀。拆标，免去人工麻烦，同时将施工风险降至最低。</li>
					      </ul>
					    </el-carousel-item>
					</el-carousel>			
				</dd>

			</dl>
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
	.el-carousel__item:nth-child(2n) {
		background-color: #ccc;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #ddd;
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
		background:url('../../assets/img/toCar1.png') no-repeat;
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
		dl{
			padding:0.925rem 0.75rem 0.0rem;
			dt{
				@include sc(0.9rem,#636262);
				font-weight:bold;
				padding-bottom:0.7rem;
				i{
					font-style:italic;
					font-size:0.6rem;
					padding-left:0.6rem;
				}
			}
			dd{
				img{
					@include wh(100%,auto)
				}
				.num{
					@include wh(50%,auto);
				    margin-left: 23%;	
				}
				.data{
					@include sc(0.6rem,#323232)
				}
				.dataDe{
					@include sc(0.55rem,#8b8b8b)
				}
			}
			.d1{
				.ddTitle{
					@include sc(17px,#535353);
					font-weight:bold;
					padding-top:1.05rem;
				}
				.line{
					@include wh(1.85rem,0.15rem)
				}
				.carContent{
					@include sc(0.675rem,#797979);
					line-height:1.05rem;
				}
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
	export default{
		data(){
			return{
		        dialogTableVisible: false
			}
		}
	}
</script>
