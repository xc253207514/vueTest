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
				<dt>联系我们<i>MAIL US</i></dt>
				<dd class="d1">
					<ul>
						<li class="li1">咨询类型 | Type</li>
						<li>
							<el-select  placeholder="请选择" v-model="value" >
						    	<el-option value="售前咨询"></el-option>
						    	<el-option value="售后咨询"></el-option>
						    	<el-option value="加盟咨询"></el-option>  
							</el-select>
						</li>
					</ul>	
				</dd>
				<dd class="d1">
					<ul>
						<li class="li1">称呼 | Name:</li>
						<li><el-input  placeholder="" width="50%" v-model="name"></el-input></li>
					</ul>
					<ul>
						<li class="li1">手机 | Phone:</li>
						<li><el-input  placeholder="" v-model="pho"></el-input></li>
					</ul>
				</dd>
				<dd class="d1">
					<ul>
						<li class="li1">邮箱 | Email:</li>
						<li><el-input  placeholder="" v-model="email"></el-input></li>
					</ul>				
				</dd>
				<dd class="d1">
					<ul>
						<li class="li1">留言 | Message：</li>
						<li><el-input  placeholder="" type="textarea" v-model="leaveMsg"></el-input></li>
					</ul>			
				</dd>
				<dd class="d2"><Button type="info" long :disabled="able" @click="send">{{content}}</Button></dd>
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
			<Modal v-model="modal" width="360">
		        <p slot="header" style="color:#f60;text-align:center">
		            <Icon type="information-circled"></Icon>
		            <span>表格信息不完整</span>
		        </p>
		        <div style="text-align:center">
		            <p style="font-size: 1rem;">{{alertMsg}}</p>
		        </div>
		        <div slot="footer">
		            <Button type="error" size="large" long :loading="modal_loading" @click="confirm">确定</Button>
		        </div>
		    </Modal>
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
		background:url('../../assets/img/contact1.png') no-repeat;
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
				}
			}
			.d1{
				ul li {
					color:#8b8b8b;
					img{
						@include wh(2.75rem,2.75rem)
					}
				}
				.li1{
					padding-bottom: 0.3rem;
					padding-top:0.3rem;
    				font-size: 0.6rem;
				}
			}
			.d2{
				margin-top:1rem;
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
	import {checkMobile,checkEmail} from '../../config/data-utils'
	import {sendEmail} from '../../config/data-service'
	export default{
		data(){
			return{
		        dialogTableVisible: false,
		        value:'',
		        name:'',
		        pho:'',
		        email:'',
		        leaveMsg:'',
		        modal_loading:false,
		        modal:false,
		        alertMsg:'',
		        able:false,
		        content:"Send Message"
			}
		},
		mounted(){
			
		},
		methods:{
			send(){
				console.log(this.value+".."+this.name+".."+this.pho+".."+this.email+".."+this.leaveMsg);
				if(this.value == ''){
					this.modal = true;
					this.alertMsg = '请选择咨询类型';
					return;
				}
				if(this.name == ''){
					this.modal = true;
					this.alertMsg = '姓名不能为空';
					return;
				}
				if(this.pho == ''){
					this.modal = true;
					this.alertMsg = '电话号码不能为空';
					return;
				}
				if(!checkMobile(this.pho)){
					this.modal = true;
					this.alertMsg = '请填写正确的手机号码';
					return;
				}
				if(this.email == ''){
					this.modal = true;
					this.alertMsg = '邮箱地址不能为空';
					return;
				}
				if(!checkEmail(this.email)){
					this.modal = true;
					this.alertMsg = '请填写正确的邮箱地址';
					return;
				}
				if(this.leaveMsg == ''){
					this.modal = true;
					this.alertMsg = '请填写您的留言';
					return;
				}
				console.log(this.value);
				sendEmail(this.value,this.name,this.pho,this.email,this.leaveMsg).then(res=>{
					console.log(res);
					
					if(res.code == '200'){
						this.modal = true;
						this.alertMsg = '邮件发送成功！';
					}
					var time = 30;
					var t=setInterval(()=>{
						time--;
						 // this.able = false;
						if(time > 0){
							// clearInterval(t);
							// this.able = true;
							this.able = true;
							console.log(time);
							this.content = time;
						}else{
							// console.log(2);
							clearInterval(t);
							this.able = false;
							this.content ='send Message'
						}
					},1000)
				})
					// console.log(this.value+".."+this.name+".."+this.pho+".."+this.email+".."+this.leaveMsg);
					// this.$Notice.success({
                    	// title: 'Notification title',
                    	// desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
               		// });
				// })

			},
			confirm:function(){
				this.modal = false;
			}
		}
	}
</script>
