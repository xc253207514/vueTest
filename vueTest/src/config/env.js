let domainUrl = '';
let routerMode = 'history';
let imgBaseUrl = 'http://images.jinfu.com/';

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'dev') {
	domainUrl = 'https://d.carbros.cn:4433/GplusServer';
	// gaodeUrl="http://restapi.amap.com/v3/geocode/geo";
}else if(process.env.NODE_ENV == 'uat'){
	domainUrl = 'https://d.carbros.cn:4433/GplusServer';
}else if(process.env.NODE_ENV == 'production'){
	domainUrl='https://d.carbros.cn:4433/GplusServer';
}else{
	domainUrl = 'https://d.carbros.cn:4433/GplusServer';
}

export {
    domainUrl,
    routerMode,
    imgBaseUrl,
}