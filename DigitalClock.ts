function digitalclock()
{
    var date=new Date();
    var timestamp=date.toLocaleTimeString();
    console.log(timestamp)
}

setInterval(function()
{
    digitalclock()
},1000)