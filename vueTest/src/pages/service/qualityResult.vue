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
			<div class="title">
				<div class="qu">
					<h2>质保查询</h2>
					<i>Warranty inquiries</i>
				</div>
				<div class="wish">感谢您选购G+顶级漆面保护膜产品，为您的爱车带来极致的漆面保护体验!</div>
			</div>	
			<div class="queryPart">
				<Collapse >
			        <Panel name="1">
			            G + 车辆信息
			            <table slot="content" border="1" cellspacing="0" >
			            	<tr>
			            		<td>车辆品牌</td>
			            		<td>{{msgTotal.CarModel}}</td>
			            	</tr>
			            	<tr>
			            		<td>车架号码</td>
			            		<td>{{msgTotal.CarNumber}}</td>
			            	</tr>
			            	<tr>
			            		<td>牌照号码</td>
			            		<td>{{msgTotal.VIN }}</td>
			            	</tr>
			            	<tr>
			            		<td>车辆颜色</td>
			            		<td>{{msgTotal.CarColor}}</td>
			            	</tr>	
			            </table>
			        </Panel>
			        <Panel name="2">
			            G + 产品信息
			             <table slot="content" border="1" cellspacing="0" >
			            	<tr>
			            		<td>产品系列</td>
			            		<td>{{msgTotal.ProductName}}</td>
			            	</tr>
			            	<tr>
			            		<td>卷轴编号</td>
			            		<td>{{msgTotal.PN}}</td>
			            	</tr>
			            	<tr>
			            		<td>质保年限</td>
			            		<td>{{msgTotal.GP}}</td>
			            	</tr>
			            	<tr>
			            		<td>安装范围</td>
			            		<td>{{msgTotal.SalePart}}</td>
			            	</tr>	
			            </table>
			        </Panel>
			        <Panel name="3">
			            G + 装贴信息
			              <table slot="content" border="1" cellspacing="0" >
			            	<tr>
			            		<td>装贴日期</td>
			            		<td>{{this.startTime}}</td>
			            	</tr>
			            	<tr>
			            		<td>装贴门店</td>
			            		<td>{{msgTotal.StoreName}}</td>
			            	</tr>
			            </table>
			        </Panel>
			        <Panel name="4">
			            G + 质保信息
			             <table slot="content" border="1" cellspacing="0" >
			            	<tr>
			            		<td>质保日期</td>
			            		<td>{{this.expTime}}</td>
			            	</tr>
			            	<tr>
			            		<td>质保范围</td>
			            		<td>G+漆面保护膜，质保期限内因生产材料或工艺缺陷导致的开裂，起泡，翘边，分层等现象，G+授权经销商将免费为您更换。   
								G+漆面膜日常养护须知：
								+安装后72小时避免洗车。
								+请勿用高压水枪对着边角直接冲洗。
								+避免硬物刮擦膜或含有腐蚀化学清洗剂擦洗膜表面。
								+配合使用G+漆面保护膜专用养护蜡，让商家或自行涂抹在保护膜上，每隔三月一次，可大大增加透明膜耐久性。</td>
			            	</tr>
			            	<tr>
			            		<td colspan="2">车辆照片</td>
			            	</tr>
			            	<tr>
			            		<td  colspan="2">
			            			<img :src="imgSrc" v-for="imgSrc in Imgs" alt="" width="40%">
			            		</td>
			            	</tr>
			            </table>
			        </Panel>
			    </Collapse>
			</div>
		</div>
		<Modal v-model="modal" width="360">
	        <p slot="header" style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>查询码有误</span>
	        </p>
	        <div style="text-align:center">
	            <p style="font-size: 1rem;">{{alertMsg}}</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="confirm">确定</Button>
	        </div>
	    </Modal>
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
		padding:0.925rem 0.75rem 0.0rem;
		.title{
			.qu{
				display:flex;
				flex-direction:row;
				h2{
					@include sc(0.9rem,#636262);
				    font-weight: bold;
				}
				i{
					@include sc(0.6rem,#636262);
					line-height: 1.5rem;
    				padding-left: 0.5rem;
    				font-style:italic; 
				}
			}
			.wish{
				@include sc(0.6rem,#98040b);
			    padding-bottom: 0.5rem;	
			}
		}
		.queryPart{
			table{
				border-collapse:collapse;
				tr{
					width:100%;
					td{
						border:1px solid #dcdcdc;
						padding-left:0.7rem;
						&:nth-of-type(1){
							@include wh(220px,1.5rem)
						}
						&:nth-of-type(2){
							width:70%;
						}
					}
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
	import {queryQuality} from '../../config/data-service'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        carNum:'',
		        msgTotal:{},
		        Imgs:[],
		        startTime:'',
		        alertMsg:'请正确输入信息',
		        modal:false,
		        expTime:''
			}
		},
		mounted(){
			this.carNum = this.$route.query.carNumber;
			queryQuality(this.carNum).then(res =>{
				console.log(res.Count)
				if(res.Count == 0){
						this.modal = true;
				}else{
					this.msgTotal = res.QueryWarrantyList[0];
					console.log(this.msgTotal)
					this.Imgs = this.msgTotal.Imgs.split(';') 
					this.startTime = this.msgTotal.SaleTime.substring(0, this.msgTotal.SaleTime.indexOf('T'));
					this.expTime = this.msgTotal.EXP.substring(0, this.msgTotal.EXP.indexOf('T'));
				}
				
				// console.log(this.msgTotal)
			})
		},
		methods:{
			confirm(){
				this.modal = false;
				this.$router.push({path:'/quality'});
			}
		}
	}
</script>