javascript:
var c = A2W(prompt("此處文字不用改，在下方彈出對話框中輸入繁体字"));
function A2W(s)
{
	var r="";
	var charArray = s.split("");
	for(var i=0;i<s.length;i++)
	{
		if(charArray[i].indexOf('<') > -1)
		{
			if(charArray[i+1].indexOf('b') > -1)
			{
				r = r + '<br>';
				i = i+3;
			}
			else if(charArray[i+2].indexOf('t') > -1)
			{
				r = r + '<strong>';
				i = i+7;
			}
			else if(charArray[i+1].indexOf('/') > -1 && charArray[i+3].indexOf('t') > -1)
			{
				r = r + '</strong>';
				i = i+8;
			}
			else if(charArray[i+2].indexOf('p') > -1)
			{
				r = r + '<span class="edit_font_color">';
				i = i+29;
			}			
			else if(charArray[i+1].indexOf('/') > -1 && charArray[i+3].indexOf('p') > -1)
			{
				r = r + '</span>';
				i = i+6;
			}			
		}else
		{
			r += '&\011#'+s.charCodeAt(i)+';';
		}
	}	
	return r
};
$.post(
		"http://tieba.baidu.com/f/commit/post/add",
		{
			kw:PageData.forum.name,
			ie:"utf-8",
			rich_text:1,
			floor_num:1,
			fid:PageData.forum.id,
			tid:PageData.thread.id,
			content:c,
			anonymous:0,
			tbs:PageData.tbs
		},function(o){
			if(o.no != 0)
			alert("no:"+o.no+"\nerr_code:"+o.err_code+"\nerror:"+o.error);
			else location.reload()
		},"json"
	);
void 0

javascript:
SimplePostor.prototype._getHtml = function(){
	var a = '<strong>' + this._se.getHtml() + '</strong>';
	return a
};
void 0


javascript:
SimplePostor.prototype._getHtml = function(){
	var r = "";
	var s = this._se.getHtml();	
	for(var i=0;i<s.length;i++)
	{
		r += '&\011#'+s.charCodeAt(i)+';';
	}
	var a = '<strong>' + r + '</strong>';	
	return a
};
void 0

var a = '<span class="edit_font_color">' + r + '</span>';

r = r + '<br>' + "here is line feed";

r = '<span class="edit_font_color"><strong>' + r + '</strong></span>';


javascript:
var c = A2W(prompt("這個框可以輸入你想回帖的繁體字\n或使用「標籤」show出高級字體\n\n" + 
"標籤使用說明：\n" + 
 "一、請在要換行的地方打  <換行>  就可以換行嘍！\n\n　　第一行繁體字<換行>第二行繁體字\n\n" + 
 "二、連續簽到10天「才可以」用粗體字，使用範例\n\n　　這是一個<粗>粗鐵</粗>\n\n" + 
 "三、連續簽到20天「才可以」用紅色字，使用範例如下\n\n　　這是一個<紅>紅色heart</紅>\n\n" +
 "四、粗紅色這樣才能使用\n\n　　這是粗體紅色的<粗><紅>internet</紅></粗>英文\n\n" + 
 "五、可以先打好文章再加標籤\n　　copy貼過來這個輸入框比較不會錯誤喔！\n" + 
 "　　順便列可能犯的錯誤範例"+"("+"按確定會沒反應"+")"+"給大家參考\n\n" + 
 "　　<粗  <<粗  粗> ...............一定要左右包好才行\n\n" + 
 "　　<粗><紅>用錯了啦</粗></紅> ... 粗紅紅粗 的順序才對\n\n" +
 "很簡單的快來試試吧～"));
function A2W(s)
{
	var r="";
	var charArray = s.split("");
	for(var i=0;i<s.length;i++)
	{
		if(charArray[i].indexOf('<') > -1)
		{
			if(charArray[i+1].indexOf('換') > -1)
			{
				r += '<br>';
				i ++;
			}
			if(charArray[i+1].indexOf('粗') > -1)
			{
				r += '<strong>';
			}
			if(charArray[i+1].indexOf('紅') > -1)
			{
				r += '<span class="edit_font_color">';
			}
			if(charArray[i+1].indexOf('/') > -1)
			{		
				if(charArray[i+2].indexOf('粗') > -1)
				{
					r += '</strong>';
				}
				if(charArray[i+2].indexOf('紅') > -1)
				{
					r += '</span>';
				}
				i ++;
			}
			i += 2;
		}else
		{
		r += '&\011#'+s.charCodeAt(i)+';';
		}
	}
	return r
};
$.post(
		"http://tieba.baidu.com/f/commit/post/add",
		{
			kw:PageData.forum.name,
			ie:"utf-8",
			rich_text:1,
			floor_num:1,
			fid:PageData.forum.id,
			tid:PageData.thread.id,
			content:c,
			anonymous:0,
			tbs:PageData.tbs
		},function(o){
			if(o.no != 0)
			alert("no:"+o.no+"\nerr_code:"+o.err_code+"\nerror:"+o.error);
			else location.reload()
		},"json"
	);
void 0




javascript:
SimplePostor.prototype._getHtml = function(){
	var r = "";
	var s = this._se.getHtml();	
	for(var i=0;i<s.length;i++)
	{
		r += '&\011#'+s.charCodeAt(i)+';';
	}
	var a = '<strong>' + r + '</strong>';
	return a
};
void 0




r +=  '<br>' + "here is line feed";

r = '<span class="edit_font_color"><strong>' + r + '</strong></span>';


