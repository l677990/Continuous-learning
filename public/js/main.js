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
//判断质数 只能被1和自身整除的数
function Prime1(primenum) {
	var num=true;
	for(var i=2;i<primenum;i++)
	{
		if(primenum % i ===0)
		{
			num=false;
			break;
		}
	}
		if(num)
		{
			console.log('是质数');
		}
		else
		{
			console.log('不是质数');
		}
}

//求一组数中最大值
function maxzuida(numary) {
	var max=numary[0];
	for(var i=1;i<numary.length;i++)
	{
		if(max<numary[i])
		{
			max=numary[i];
		}
	}
	return max;
}
//求一组数中最小值
function minzuixiao(numary) {
	var min=numary[0];
	for (var i=1;i<numary.length;i++)
	{
		if(min>numary[i])
		{
			min=numary[i];
		}
	}
	return min;
}
//求阶乘
function jiecheng(jc) {
	var cheng=1;
	for (var i=1;i<=jc;i++)
	{
		cheng*=i;
	}
	return cheng;
}
//求1！+2！+3！+...+n!
function hejiecheng(hjc) {
	var he=0;
	for (var i=1;i<=hjc;i++)
	{
		he+=jiecheng(i);
	}
	return he;
}

//arguments的使用
//求任意个数的最大值
function amax() {
	var sum=arguments[0];
	for(var i=1;i<arguments.length;i++)
	{
		if(sum<arguments[i])
		{
			sum=arguments[i];
		}
	}
	return sum;
}
//求任意个数的和
function asum() {
	var sum=0;
	for(var i=1;i<arguments.length;i++)
	{
		sum+=arguments[i];
	}
	return sum;
}
//斐波那契数列
function fbn(n) {
	var n1 = 1;
	var n2 = 1;
	var n3;
	for (var i = 3;i < n;i++)
	{
		n3 = n1+n2;
		n1 = n2;
		n2 = n3;
	}
	return n3;
}
//翻转一组数
function fanzhuan(arr) {
	var num = [];
	for(var i = arr.length - 1;i >= 0;i--)
	{
		num[num.length] = arr[i];
	}
	return num;
}

//冒泡排序 sort 排序
// function sort(arr) { 						  //定义函数
// 	for(var i=0;i<arr.length-1;i++){          //循环趟数,数组-1趟
// 		for(var j=0;j<arr.length-1-i;j++)	  //循环对比的趟数
// 		{
// 			if(arr[j]>arr[j+1]){			  //比较相邻的大小
// 				var tmp=arr[j];
// 				arr[j]=arr[j+1];			  //互相交换位置
// 				arr[j+1]=tmp;
// 			}
// 		}
// 	}
// 	return arr;
// }

function sort(arr) {
	for(var i=0;i<arr.length-1;i++) {
		for (var j = 0;j < arr.length - 1 - i;j++) {
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}
