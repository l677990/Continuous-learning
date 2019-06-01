//1-100相加函数
function number() {
	var num=0;
	for(var i=1;i<=100;i++)
	{
		num+=i;
	}
	console.log(num);
}
function fun(num1,num2) {
	console.log(num1+num2);
}
//圆面积函数
function getArea(r) {
	var num=3.14;
	var Area=0;
	Area=num*r*r;
	console.log(Area);
}
//求数组中最大值函数
function maxnum(ary) {
	var max=ary[0];
	for(var i=1;i<ary.length;i++)
	{
		if(max<ary[i])
		{
			max=ary[i];
		}
	}
	console.log(max);
}