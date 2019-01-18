import fetch from './fetch'
// import {getStore} from './data-utils'

// 获取品牌资讯和活动资讯
export const brandMsg = (count,pageNumber) => fetch('/Site/GetBrandNewsInfo',{Count:count,PageNumber:pageNumber});
export const activityMsg = (count,pageNumber) => fetch('/Site/GetActivityNewsInfo',{Count:count,PageNumber:pageNumber});
//查询品牌资讯详情
export const queryBrand = (id) => fetch('/Site/GetNewsDetail',{id:id});
//视频案例 图文案例
export const videoInfor = (count,pageNumber) => fetch('/Site/GetVideoCaseInfo',{Count:count,PageNumber:pageNumber});
export const imgInfor = (count,pageNumber) => fetch('QCloud/GetImgCaseList',{Count:count,PageNumber:pageNumber});
//质保查询
export const queryQuality= (num) => fetch('/Site/QueryWarrantyInfo',{query:num});
//发送邮件
export const sendEmail = (type,name,pho,email,msg) =>fetch('/Site/SendMail',{Type:type,Contact:name,ContactNumber:pho,Email:email,Message:msg});
//获取运营商信息
export const getCountry = () =>fetch('/Site/QueryPartnerCountry'); //获取国家
export const getPro = (country) =>fetch('/Site/QueryPartnerProvince',{Country:country});//获取省份
export const getCity =(country,pro) =>fetch('/Site/QueryPartnerCity',{Country:country,Province:pro}); //获取城市
export const getArea =(country,pro,city) =>fetch('/Site/QueryPartnerCounty',{Country:country,Province:pro,City:city}); //获取区域
export const queryOperator =(country,pro,city,area) =>fetch('/Site/QueryPartnerList',{Country:country,Province:pro,City:city,County:area});
//查询公司网站
export const getSite = (id) =>fetch('/Site/QueryPartnerImg',{Id:id}); 