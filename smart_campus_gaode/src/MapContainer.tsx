//@ts-ignore
import React, { useEffect, useState } from "react";
//@ts-ignore
import AMapLoader from "@amap/amap-jsapi-loader";
import "./MapContainer.css";

import TrafficButton from "./TrafficButton";
import RouteOptimize from "./RouteOptimize";
import AddMarker from "./AddMarker";

const studentData = [
  {
    学号: 1101,
    姓名: "鲍心悦",
    性别: "女",
    证件号码: "310101200808263243",
    初中学校: "上海市市八初级中学",
    招生学校: "浦江校区",
    语文: 127,
    数学: 128,
    外语: 144.5,
    综合测试: 131,
    物理: 64,
    化学: 41,
    跨学科案例分析: 11,
    历史: 57,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 675.5,
    户籍地址: "上海市黄浦区光启南路169弄33号",
    通讯地址: "浦东新区和炯路77弄11号2606室",
    邮政编码: 200010,
    联系电话: 15901773660,
    社会关系1: "父",
    姓名1: "鲍胜初",
    联系电话1: 13816513386,
    社会关系2: "母",
    姓名2: "赖晓巧",
    联系电话2: 15821960529,
    班级: 11,
  },
  {
    学号: 1102,
    姓名: "胡安蕊",
    性别: "女",
    证件号码: "340222200711060565",
    初中学校: "上海市师资培训中心附属闵行实验中学",
    招生学校: "浦江校区",
    语文: 124,
    数学: 127,
    外语: 135.0,
    综合测试: 132,
    物理: 66,
    化学: 42,
    跨学科案例分析: 9,
    历史: 57,
    道德与法治: 54,
    体育: 30,
    附加分: 0,
    录取总分: 659.0,
    户籍地址: "上海市松江区莘松路1288弄1207号901室",
    通讯地址: "上海市闵行区莘中路15弄94号602室",
    邮政编码: 201100,
    联系电话: 18221637881,
    社会关系1: "父",
    姓名1: "胡文飞",
    联系电话1: 18221637881,
    社会关系2: "母",
    姓名2: "徐维芳",
    联系电话2: 15001727435,
    班级: 11,
  },
  {
    学号: 1103,
    姓名: "匡雅琳",
    性别: "女",
    证件号码: "310112200807285626",
    初中学校: "上海市马桥强恕学校",
    招生学校: "浦江校区",
    语文: 131,
    数学: 118,
    外语: 143.0,
    综合测试: 132,
    物理: 62,
    化学: 44,
    跨学科案例分析: 11,
    历史: 56,
    道德与法治: 58,
    体育: 30,
    附加分: 5,
    录取总分: 673.0,
    户籍地址: "闵行区银秋路1351弄8号1004室",
    通讯地址: "闵行区银秋路1351弄8号1004室",
    邮政编码: 201111,
    联系电话: 13917492257,
    社会关系1: "父",
    姓名1: "匡成超",
    联系电话1: 13917492257,
    社会关系2: "母",
    姓名2: "邹池远",
    联系电话2: 13817991109,
    班级: 11,
  },
  {
    学号: 1104,
    姓名: "李若瑶",
    性别: "女",
    证件号码: "310105200808071220",
    初中学校: "上海民办永昌学校",
    招生学校: "浦江校区",
    语文: 137,
    数学: 126,
    外语: 145.5,
    综合测试: 125,
    物理: 64,
    化学: 39,
    跨学科案例分析: 7,
    历史: 59,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 680.5,
    户籍地址: "瑞金二路129弄118号401室",
    通讯地址: "长宁区新华路666弄4号1101室",
    邮政编码: 200052,
    联系电话: 52308111,
    社会关系1: "父",
    姓名1: "李杰",
    联系电话1: 13917731888,
    社会关系2: "母",
    姓名2: "黄韵婧",
    联系电话2: 13918937508,
    班级: 11,
  },
  {
    学号: 1105,
    姓名: "李思雨",
    性别: "女",
    证件号码: "310112200711121547",
    初中学校: "上海市闵行区上虹中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 134,
    外语: 143.0,
    综合测试: 123,
    物理: 58,
    化学: 40,
    跨学科案例分析: 10,
    历史: 56,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 671.0,
    户籍地址: "吴中路511弄110号101室",
    通讯地址: "吴中路511弄110号101室",
    邮政编码: 201103,
    联系电话: 13482330577,
    社会关系1: "父",
    姓名1: "李科",
    联系电话1: 13482330577,
    社会关系2: "母",
    姓名2: "陈霞",
    联系电话2: 13817625552,
    班级: 11,
  },
  {
    学号: 1106,
    姓名: "李宇涵",
    性别: "女",
    证件号码: "431121200807150320",
    初中学校: "上海市闵行区马桥复旦万科实验中学",
    招生学校: "浦江校区",
    语文: 128,
    数学: 137,
    外语: 143.0,
    综合测试: 137,
    物理: 66,
    化学: 44,
    跨学科案例分析: 12,
    历史: 53,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 686.0,
    户籍地址: "湖南省永州市祁阳县八宝镇新建村四组",
    通讯地址: "闵行区富国路355弄10号204室",
    邮政编码: 201800,
    联系电话: 13636685003,
    社会关系1: "父",
    姓名1: "李龙俊",
    联系电话1: 18149779008,
    社会关系2: "母",
    姓名2: "廖芳亭",
    联系电话2: 18149779008,
    班级: 11,
  },
  {
    学号: 1107,
    姓名: "梁爽",
    性别: "女",
    证件号码: "15010420070907012X",
    初中学校: "上海市闵行区田园外国语中学",
    招生学校: "浦江校区",
    语文: 127,
    数学: 136,
    外语: 141.5,
    综合测试: 128,
    物理: 60,
    化学: 42,
    跨学科案例分析: 11,
    历史: 59,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 679.5,
    户籍地址: "上海市闵行区银都路3151弄76号101室",
    通讯地址: "上海市闵行区银都路3151弄76号101室",
    邮政编码: 201108,
    联系电话: 15301688638,
    社会关系1: "父",
    姓名1: "梁金虎",
    联系电话1: 15301688638,
    社会关系2: "母",
    姓名2: "杨雪蓉",
    联系电话2: 18916048886,
    班级: 11,
  },
  {
    学号: 1108,
    姓名: "刘若兮",
    性别: "女",
    证件号码: "350122200711150401",
    初中学校: "上海市向明初级中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 121,
    外语: 148.5,
    综合测试: 121,
    物理: 56,
    化学: 42,
    跨学科案例分析: 8,
    历史: 56,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 660.5,
    户籍地址: "平型关路1083弄12号902室",
    通讯地址: "黄浦区徐家汇路515弄16号1602室",
    邮政编码: 200023,
    联系电话: 13701768483,
    社会关系1: "父",
    姓名1: "刘洪波",
    联系电话1: 13701768483,
    社会关系2: "母",
    姓名2: "林春青",
    联系电话2: 13761252927,
    班级: 11,
  },
  {
    学号: 1109,
    姓名: "卢怡然",
    性别: "女",
    证件号码: "32011120071212522X",
    初中学校: "上海市闵行第五中学",
    招生学校: "浦江校区",
    语文: 121,
    数学: 125,
    外语: 143.0,
    综合测试: 129,
    物理: 62,
    化学: 42,
    跨学科案例分析: 10,
    历史: 58,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 662.0,
    户籍地址: "上海市闵行区凤庆路58弄46号701室",
    通讯地址: "上海市闵行区凤庆路58弄46号701室",
    邮政编码: 200240,
    联系电话: 13816752808,
    社会关系1: "父",
    姓名1: "卢凯",
    联系电话1: 13795336193,
    社会关系2: "母",
    姓名2: "顾秀芳",
    联系电话2: 13816752808,
    班级: 11,
  },
  {
    学号: 1110,
    姓名: "罗嘉音",
    性别: "女",
    证件号码: "310112200803222425",
    初中学校: "上海市闵行区北桥中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 134,
    外语: 136.0,
    综合测试: 132,
    物理: 60,
    化学: 43,
    跨学科案例分析: 14,
    历史: 56,
    道德与法治: 52,
    体育: 30,
    附加分: 0,
    录取总分: 666.0,
    户籍地址: "上海市闵行区颛桥镇中心村马家堰4号",
    通讯地址: "闵行区金阳路116弄2号1203室",
    邮政编码: 201109,
    联系电话: 13601792276,
    社会关系1: "父",
    姓名1: "应韶锋",
    联系电话1: 13917341477,
    社会关系2: "母",
    姓名2: "罗红彪",
    联系电话2: 13601792276,
    班级: 11,
  },
  {
    学号: 1111,
    姓名: "罗怡",
    性别: "女",
    证件号码: "310115200801094027",
    初中学校: "上海市向明初级中学",
    招生学校: "浦江校区",
    语文: 135,
    数学: 129,
    外语: 133.5,
    综合测试: 129,
    物理: 66,
    化学: 36,
    跨学科案例分析: 12,
    历史: 59,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 672.5,
    户籍地址: "张江路1616弄19号102室",
    通讯地址: "上海市浦东新区张江路1616弄19号102室",
    邮政编码: 201210,
    联系电话: 17302161820,
    社会关系1: "父",
    姓名1: "罗海峰",
    联系电话1: 18017485857,
    社会关系2: "母",
    姓名2: "彭娥",
    联系电话2: 17302161820,
    班级: 11,
  },
  {
    学号: 1112,
    姓名: "马可芯",
    性别: "女",
    证件号码: "310115200804274226",
    初中学校: "上海市民办立达中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 131,
    外语: 143.5,
    综合测试: 129,
    物理: 61,
    化学: 41,
    跨学科案例分析: 12,
    历史: 59,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 680.5,
    户籍地址: "保屯路211弄12号11室",
    通讯地址: "南车站路318-1-2701",
    邮政编码: 200011,
    联系电话: 13681682668,
    社会关系1: "父",
    姓名1: "马强",
    联系电话1: 13764255417,
    社会关系2: "母",
    姓名2: "程鲜妮",
    联系电话2: 13681682668,
    班级: 11,
  },
  {
    学号: 1113,
    姓名: "潘柏霖",
    性别: "女",
    证件号码: "310101200805313225",
    初中学校: "上海市尚文中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 117,
    外语: 135.0,
    综合测试: 137,
    物理: 66,
    化学: 44,
    跨学科案例分析: 12,
    历史: 57,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 663.0,
    户籍地址: "上海市黄浦区北施家弄180弄10号",
    通讯地址: "开兴路199弄12号501室",
    邮政编码: 201107,
    联系电话: 18616930101,
    社会关系1: "父",
    姓名1: "潘沈格",
    联系电话1: 18616930101,
    社会关系2: "母",
    姓名2: "冯千芳",
    联系电话2: 13918623389,
    班级: 11,
  },
  {
    学号: 1114,
    姓名: "汤昕钰",
    性别: "女",
    证件号码: "310101200712280022",
    初中学校: "上海市闵行区莘松中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 135,
    外语: 142.5,
    综合测试: 128,
    物理: 61,
    化学: 43,
    跨学科案例分析: 9,
    历史: 58,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 681.5,
    户籍地址: "莲花南路1111弄45号1404室",
    通讯地址: "莲花南路1111弄45号1404室",
    邮政编码: 201104,
    联系电话: 13585778560,
    社会关系1: "父",
    姓名1: "汤知行",
    联系电话1: 13916758944,
    社会关系2: "母",
    姓名2: "葛亮",
    联系电话2: 13585778560,
    班级: 11,
  },
  {
    学号: 1115,
    姓名: "陶莹",
    性别: "女",
    证件号码: "310101200801033808",
    初中学校: "上海市光明初级中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 128,
    外语: 136.0,
    综合测试: 126,
    物理: 64,
    化学: 37,
    跨学科案例分析: 10,
    历史: 59,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 664.0,
    户籍地址: "上海市黄浦区傅家街路44号2室",
    通讯地址: "上海市黄浦区复兴东路404弄6号楼3032室",
    邮政编码: 200010,
    联系电话: 13761324720,
    社会关系1: "父",
    姓名1: "陶崇国",
    联系电话1: 13611627371,
    社会关系2: "母",
    姓名2: "饶桃梅",
    联系电话2: 15000226520,
    班级: 11,
  },
  {
    学号: 1116,
    姓名: "王家蕾",
    性别: "女",
    证件号码: "310104200803134441",
    初中学校: "上海市闵行区莘松中学",
    招生学校: "浦江校区",
    语文: 135,
    数学: 131,
    外语: 144.5,
    综合测试: 122,
    物理: 58,
    化学: 38,
    跨学科案例分析: 11,
    历史: 59,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 677.5,
    户籍地址: "闵行区莲花南路1288弄48号602室",
    通讯地址: "闵行区莲花南路1288弄48号602室",
    邮政编码: 201104,
    联系电话: 13641793467,
    社会关系1: "父",
    姓名1: "王健民",
    联系电话1: 18321970290,
    社会关系2: "母",
    姓名2: "顾玉明",
    联系电话2: 13641793467,
    班级: 11,
  },
  {
    学号: 1117,
    姓名: "王梦蓥",
    性别: "女",
    证件号码: "310101200807171021",
    初中学校: "上海市金陵中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 119,
    外语: 131.0,
    综合测试: 126,
    物理: 61,
    化学: 41,
    跨学科案例分析: 9,
    历史: 58,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 647.0,
    户籍地址: "上海市黄浦区北京东路850弄10号",
    通讯地址: "上海市虹口区汶水东路510弄43号304室",
    邮政编码: 200083,
    联系电话: 15221008228,
    社会关系1: "父",
    姓名1: "王勇",
    联系电话1: 13386163692,
    社会关系2: "母",
    姓名2: "腾飞蝶",
    联系电话2: 15221008228,
    班级: 11,
  },
  {
    学号: 1118,
    姓名: "王文文",
    性别: "女",
    证件号码: "340403200806061642",
    初中学校: "上海市罗阳中学",
    招生学校: "浦江校区",
    语文: 137,
    数学: 126,
    外语: 136.0,
    综合测试: 137,
    物理: 67,
    化学: 44,
    跨学科案例分析: 11,
    历史: 56,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 681.0,
    户籍地址: "安徽省淮南市田家庵区老龙眼花园村41-2-8",
    通讯地址: "闵行区莘朱路1815弄4号205室",
    邮政编码: 200237,
    联系电话: 18221917469,
    社会关系1: "父",
    姓名1: "姚士元",
    联系电话1: 18856452561,
    社会关系2: "母",
    姓名2: "王康华",
    联系电话2: 18221917469,
    班级: 11,
  },
  {
    学号: 1119,
    姓名: "王晞恩",
    性别: "女",
    证件号码: "330127200711150020",
    初中学校: "上海市闵行第三中学",
    招生学校: "浦江校区",
    语文: 125,
    数学: 124,
    外语: 133.5,
    综合测试: 110,
    物理: 53,
    化学: 35,
    跨学科案例分析: 7,
    历史: 56,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 637.5,
    户籍地址: "浙江省淳安县千岛湖镇知丰路4幢1101室",
    通讯地址: "奉贤区扶港路629弄32号202室",
    邮政编码: 201401,
    联系电话: 13917376863,
    社会关系1: "父",
    姓名1: "王学军",
    联系电话1: 13601945355,
    社会关系2: "母",
    姓名2: "李泠霖",
    联系电话2: 13917376863,
    班级: 11,
  },
  {
    学号: 1120,
    姓名: "翁卓媛",
    性别: "女",
    证件号码: "310103200808055025",
    初中学校: "上海市黄浦区教育学院附属中山学校",
    招生学校: "浦江校区",
    语文: 122,
    数学: 126,
    外语: 136.5,
    综合测试: 123,
    物理: 60,
    化学: 41,
    跨学科案例分析: 7,
    历史: 52,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 645.5,
    户籍地址: "上海市浦东新区板泉路1555弄43号301室",
    通讯地址: "浦东新区板泉路1555弄43号301室",
    邮政编码: 200126,
    联系电话: 18049937504,
    社会关系1: "父",
    姓名1: "翁建平",
    联系电话1: 13002195730,
    社会关系2: "母",
    姓名2: "朱琪",
    联系电话2: 18049937504,
    班级: 11,
  },
  {
    学号: 1121,
    姓名: "袁怡婷",
    性别: "女",
    证件号码: "310112200806112125",
    初中学校: "上海市古美学校",
    招生学校: "浦江校区",
    语文: 128,
    数学: 122,
    外语: 138.0,
    综合测试: 137,
    物理: 66,
    化学: 41,
    跨学科案例分析: 15,
    历史: 57,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 670.0,
    户籍地址: "万源路400弄44号301室",
    通讯地址: "万源路400弄44号301室",
    邮政编码: 201102,
    联系电话: 34222478,
    社会关系1: "父",
    姓名1: "袁伟",
    联系电话1: 13636584358,
    社会关系2: "母",
    姓名2: "杨慧",
    联系电话2: 13816365232,
    班级: 11,
  },
  {
    学号: 1122,
    姓名: "张贤漪",
    性别: "女",
    证件号码: "310103200807215023",
    初中学校: "上海市建平实验地杰中学",
    招生学校: "浦江校区",
    语文: 133,
    数学: 125,
    外语: 144.5,
    综合测试: 138,
    物理: 67,
    化学: 42,
    跨学科案例分析: 14,
    历史: 58,
    道德与法治: 57,
    体育: 29,
    附加分: 0,
    录取总分: 684.5,
    户籍地址: "上海市黄浦区复兴中路408弄8号",
    通讯地址: "上海市浦东新区北蔡镇御桥路1679弄16号303室",
    邮政编码: 201204,
    联系电话: 15800691117,
    社会关系1: "父",
    姓名1: "张雄",
    联系电话1: 15221586059,
    社会关系2: "母",
    姓名2: "齐琳",
    联系电话2: 15800691117,
    班级: 11,
  },
  {
    学号: 1123,
    姓名: "张歆悦",
    性别: "女",
    证件号码: "310103200802184029",
    初中学校: "上海市向明初级中学",
    招生学校: "浦江校区",
    语文: 129,
    数学: 129,
    外语: 140.0,
    综合测试: 126,
    物理: 63,
    化学: 37,
    跨学科案例分析: 11,
    历史: 55,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 668.0,
    户籍地址: "长乐路169弄13号3楼",
    通讯地址: "长乐路169弄13号3楼",
    邮政编码: 200020,
    联系电话: 13701684666,
    社会关系1: "父",
    姓名1: "张名臻",
    联系电话1: 13701684666,
    社会关系2: "母",
    姓名2: "黄静",
    联系电话2: 15921550708,
    班级: 11,
  },
  {
    学号: 1124,
    姓名: "张奕阳",
    性别: "女",
    证件号码: "31011220080219432X",
    初中学校: "上海市闵行区浦江第一中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 128,
    外语: 142.5,
    综合测试: 125,
    物理: 62,
    化学: 39,
    跨学科案例分析: 9,
    历史: 54,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 666.5,
    户籍地址: "浦秀路639弄50号102室",
    通讯地址: "浦锦街道浦秀路639弄50号102室",
    邮政编码: 201114,
    联系电话: 34303841,
    社会关系1: "父",
    姓名1: "张利斌",
    联系电话1: 13818466434,
    社会关系2: "母",
    姓名2: "杨双双",
    联系电话2: 13162782156,
    班级: 11,
  },
  {
    学号: 1125,
    姓名: "朱心岳",
    性别: "女",
    证件号码: "310112200804111225",
    初中学校: "上海市闵行区文来实验学校",
    招生学校: "浦江校区",
    语文: 120,
    数学: 126,
    外语: 131.5,
    综合测试: 130,
    物理: 60,
    化学: 44,
    跨学科案例分析: 11,
    历史: 56,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 650.5,
    户籍地址: "华漕镇陶家角村行东11号",
    通讯地址: "天山西路4358弄15号601",
    邮政编码: 201107,
    联系电话: 18616636535,
    社会关系1: "父",
    姓名1: "岳帅",
    联系电话1: 13816648687,
    社会关系2: "母",
    姓名2: "朱燕燕",
    联系电话2: 18616636535,
    班级: 11,
  },
  {
    学号: 1126,
    姓名: "蔡思成",
    性别: "男",
    证件号码: "341522200803022571",
    初中学校: "上海市闵行区诸翟学校",
    招生学校: "浦江校区",
    语文: 128,
    数学: 124,
    外语: 141.5,
    综合测试: 128,
    物理: 64,
    化学: 40,
    跨学科案例分析: 9,
    历史: 55,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 663.5,
    户籍地址: "安徽省霍邱县长集镇吴小元村胡大庄组",
    通讯地址: "闵行区华漕镇纪高路448弄8号501室",
    邮政编码: 201107,
    联系电话: 15000408565,
    社会关系1: "父",
    姓名1: "蔡松俊",
    联系电话1: 15000409369,
    社会关系2: "母",
    姓名2: "张朝艳",
    联系电话2: 15000408565,
    班级: 11,
  },
  {
    学号: 1127,
    姓名: "陈奕乔",
    性别: "男",
    证件号码: "310108200710051554",
    初中学校: "上海市骏博外国语学校",
    招生学校: "浦江校区",
    语文: 126,
    数学: 139,
    外语: 146.5,
    综合测试: 131,
    物理: 63,
    化学: 42,
    跨学科案例分析: 11,
    历史: 56,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 687.5,
    户籍地址: "京江路299号802室",
    通讯地址: "静安区长兴路168弄6号楼2601室",
    邮政编码: 200010,
    联系电话: 13601698660,
    社会关系1: "父",
    姓名1: "陈维克",
    联系电话1: 13916032187,
    社会关系2: "母",
    姓名2: "翁和舟",
    联系电话2: 13601698660,
    班级: 11,
  },
  {
    学号: 1128,
    姓名: "何佳恒",
    性别: "男",
    证件号码: "310112200709272119",
    初中学校: "上海青浦区世外学校",
    招生学校: "浦江校区",
    语文: 125,
    数学: 134,
    外语: 145.0,
    综合测试: 135,
    物理: 66,
    化学: 43,
    跨学科案例分析: 11,
    历史: 59,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 686.0,
    户籍地址: "莲花路莲花公寓425弄59",
    通讯地址: "上海市青浦区龙联路660号罗",
    邮政编码: 201702,
    联系电话: 13585916886,
    社会关系1: "父",
    姓名1: "何彬",
    联系电话1: 13816107975,
    社会关系2: "母",
    姓名2: "章少鸯",
    联系电话2: 13585916886,
    班级: 11,
  },
  {
    学号: 1129,
    姓名: "何协",
    性别: "男",
    证件号码: "350725200801200531",
    初中学校: "上海市市八初级中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 137,
    外语: 139.5,
    综合测试: 138,
    物理: 66,
    化学: 43,
    跨学科案例分析: 14,
    历史: 58,
    道德与法治: 54,
    体育: 30,
    附加分: 0,
    录取总分: 682.5,
    户籍地址: "浙江省嘉善县罗星街道塞纳蓝湾4幢2单元802室",
    通讯地址: "浦东新区航头路990弄30号",
    邮政编码: 201316,
    联系电话: 15601774588,
    社会关系1: "父",
    姓名1: "朱建军",
    联系电话1: 17502104769,
    社会关系2: "母",
    姓名2: "张郑玉",
    联系电话2: 15601774588,
    班级: 11,
  },
  {
    学号: 1130,
    姓名: "金恺",
    性别: "男",
    证件号码: "310103200803115017",
    初中学校: "上海市清华中学",
    招生学校: "浦江校区",
    语文: 126,
    数学: 126,
    外语: 141.0,
    综合测试: 136,
    物理: 66,
    化学: 43,
    跨学科案例分析: 12,
    历史: 54,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 670.0,
    户籍地址: "淡水路345弄16号503室",
    通讯地址: "淡水路345弄16号503室",
    邮政编码: 200025,
    联系电话: 15800994507,
    社会关系1: "父",
    姓名1: "金海",
    联系电话1: 15800994507,
    社会关系2: "母",
    姓名2: "钱卫娣",
    联系电话2: 13795466107,
    班级: 11,
  },
  {
    学号: 1131,
    姓名: "李麟阁",
    性别: "男",
    证件号码: "310112200709112115",
    初中学校: "上海市闵行区莘松中学",
    招生学校: "浦江校区",
    语文: 133,
    数学: 133,
    外语: 136.5,
    综合测试: 133,
    物理: 65,
    化学: 42,
    跨学科案例分析: 11,
    历史: 55,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 676.5,
    户籍地址: "上海市闵行区莲花南路1288弄92号201室",
    通讯地址: "莲花南路1288弄92号201室",
    邮政编码: 201104,
    联系电话: 13918062329,
    社会关系1: "父",
    姓名1: "李湛",
    联系电话1: 13501978476,
    社会关系2: "母",
    姓名2: "蒋芳",
    联系电话2: 13918062329,
    班级: 11,
  },
  {
    学号: 1132,
    姓名: "刘诗熠",
    性别: "男",
    证件号码: "310117200806110615",
    初中学校: "上海市清华中学",
    招生学校: "浦江校区",
    语文: 133,
    数学: 130,
    外语: 133.5,
    综合测试: 134,
    物理: 63,
    化学: 44,
    跨学科案例分析: 12,
    历史: 58,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 674.5,
    户籍地址: "上海市松江区泗陈公路501弄16号601",
    通讯地址: "上海市松江区泗陈公路501弄16号601",
    邮政编码: 201601,
    联系电话: 13816381629,
    社会关系1: "父",
    姓名1: "刘孝龙",
    联系电话1: 13816381629,
    社会关系2: "母",
    姓名2: "张鸟锋",
    联系电话2: 13818817596,
    班级: 11,
  },
  {
    学号: 1133,
    姓名: "陆佳俊",
    性别: "男",
    证件号码: "31011220080815461X",
    初中学校: "上海市闵行区浦江第二中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 128,
    外语: 133.5,
    综合测试: 132,
    物理: 68,
    化学: 43,
    跨学科案例分析: 6,
    历史: 58,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 668.5,
    户籍地址: "浦江镇杜行村2组51号",
    通讯地址: "浦江镇杜行村2组51号",
    邮政编码: 201112,
    联系电话: 13917291091,
    社会关系1: "父",
    姓名1: "陆春荣",
    联系电话1: 13917291091,
    社会关系2: "母",
    姓名2: "王淑文",
    联系电话2: 18017722796,
    班级: 11,
  },
  {
    学号: 1134,
    姓名: "马沈一",
    性别: "男",
    证件号码: "320585200801240015",
    初中学校: "上海市闵行区七宝第三中学",
    招生学校: "浦江校区",
    语文: 131,
    数学: 130,
    外语: 137.5,
    综合测试: 133,
    物理: 66,
    化学: 43,
    跨学科案例分析: 9,
    历史: 59,
    道德与法治: 54,
    体育: 30,
    附加分: 0,
    录取总分: 674.5,
    户籍地址: "新镇路603弄11号1302室",
    通讯地址: "新镇路603弄11号1302室",
    邮政编码: 201101,
    联系电话: 13564315983,
    社会关系1: "父",
    姓名1: "马永良",
    联系电话1: 13761813936,
    社会关系2: "母",
    姓名2: "沈晓红",
    联系电话2: 13564315983,
    班级: 11,
  },
  {
    学号: 1135,
    姓名: "潘承恩",
    性别: "男",
    证件号码: "310101200711043711",
    初中学校: "上海市市八初级中学",
    招生学校: "浦江校区",
    语文: 134,
    数学: 126,
    外语: 140.5,
    综合测试: 120,
    物理: 54,
    化学: 39,
    跨学科案例分析: 12,
    历史: 58,
    道德与法治: 58,
    体育: 30,
    附加分: 5,
    录取总分: 671.5,
    户籍地址: "上海市黄浦区车站东路195号602室",
    通讯地址: "浦东新区博华路380弄1号211室",
    邮政编码: 201204,
    联系电话: 13801991021,
    社会关系1: "父",
    姓名1: "潘建炜",
    联系电话1: 13901650440,
    社会关系2: "母",
    姓名2: "徐蓉",
    联系电话2: 13801991021,
    班级: 11,
  },
  {
    学号: 1136,
    姓名: "汤镇豪",
    性别: "男",
    证件号码: "310101200807072218",
    初中学校: "上海市市南中学",
    招生学校: "浦江校区",
    语文: 130,
    数学: 109,
    外语: 122.5,
    综合测试: 133,
    物理: 67,
    化学: 42,
    跨学科案例分析: 9,
    历史: 56,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 637.5,
    户籍地址: "外马路1557弄3号502室",
    通讯地址: "浦江镇浦驰路188弄97号1002室",
    邮政编码: 201114,
    联系电话: 61517686,
    社会关系1: "父",
    姓名1: "汤云",
    联系电话1: 13661910380,
    社会关系2: "母",
    姓名2: "翟允霞",
    联系电话2: 15800805835,
    班级: 11,
  },
  {
    学号: 1137,
    姓名: "王春墨",
    性别: "男",
    证件号码: "310109200712041014",
    初中学校: "上海市民办万源城协和双语学校",
    招生学校: "浦江校区",
    语文: 130,
    数学: 124,
    外语: 144.5,
    综合测试: 139,
    物理: 67,
    化学: 43,
    跨学科案例分析: 14,
    历史: 58,
    道德与法治: 54,
    体育: 30,
    附加分: 0,
    录取总分: 679.5,
    户籍地址: "闵行区莘松路958弄瀑布湾道95号1203室",
    通讯地址: "闵行区莘松路958弄瀑布湾道95号1203室",
    邮政编码: 201101,
    联系电话: 13818921622,
    社会关系1: "父",
    姓名1: "王景彤",
    联系电话1: 13818921458,
    社会关系2: "母",
    姓名2: "王欣",
    联系电话2: 13818921622,
    班级: 11,
  },
  {
    学号: 1138,
    姓名: "王帝烨",
    性别: "男",
    证件号码: "310101200711123236",
    初中学校: "上海市民办立达中学",
    招生学校: "浦江校区",
    语文: 137,
    数学: 122,
    外语: 146.0,
    综合测试: 125,
    物理: 57,
    化学: 42,
    跨学科案例分析: 11,
    历史: 59,
    道德与法治: 56,
    体育: 30,
    附加分: 5,
    录取总分: 680.0,
    户籍地址: "黄浦区紫霞路199弄9号1201室",
    通讯地址: "黄浦区紫霞路199弄9号1501室",
    邮政编码: 200010,
    联系电话: 13918183251,
    社会关系1: null,
    姓名1: null,
    联系电话1: 13918866716,
    社会关系2: "小东门街道",
    姓名2: null,
    联系电话2: 13918183251,
    班级: 11,
  },
  {
    学号: 1139,
    姓名: "王宇佟",
    性别: "男",
    证件号码: "310112200801253017",
    初中学校: "上海市闵行区教育学院附属友爱实验中学",
    招生学校: "浦江校区",
    语文: 127,
    数学: 127,
    外语: 141.0,
    综合测试: 125,
    物理: 62,
    化学: 39,
    跨学科案例分析: 9,
    历史: 60,
    道德与法治: 53,
    体育: 30,
    附加分: 0,
    录取总分: 663.0,
    户籍地址: "闵行区吴泾镇共和村10组18号",
    通讯地址: "闵行区吴泾镇紫龙路500弄89号302室",
    邮政编码: 201109,
    联系电话: 31306227,
    社会关系1: "父",
    姓名1: "王锋",
    联系电话1: 13671784669,
    社会关系2: "母",
    姓名2: "汪芳",
    联系电话2: 13818338756,
    班级: 11,
  },
  {
    学号: 1140,
    姓名: "吴俊豪",
    性别: "男",
    证件号码: "340826200710185612",
    初中学校: "上海市民办上宝中学",
    招生学校: "浦江校区",
    语文: 137,
    数学: 132,
    外语: 141.5,
    综合测试: 134,
    物理: 69,
    化学: 38,
    跨学科案例分析: 12,
    历史: 56,
    道德与法治: 57,
    体育: 30,
    附加分: 0,
    录取总分: 687.5,
    户籍地址: "上海市闵行区沁春路1366弄72号801",
    通讯地址: "闵行区沁春路1366弄72号801室",
    邮政编码: 201199,
    联系电话: 18917965018,
    社会关系1: "父",
    姓名1: "吴建民",
    联系电话1: 13601868258,
    社会关系2: "母",
    姓名2: "陈小娥",
    联系电话2: 18917965018,
    班级: 11,
  },
  {
    学号: 1141,
    姓名: "薛原",
    性别: "男",
    证件号码: "310103200801055014",
    初中学校: "上海音乐学院附属黄浦比乐中学",
    招生学校: "浦江校区",
    语文: 124,
    数学: 124,
    外语: 136.5,
    综合测试: 130,
    物理: 62,
    化学: 39,
    跨学科案例分析: 14,
    历史: 58,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 661.5,
    户籍地址: "黄浦区徐家汇路1弄3号1503室",
    通讯地址: "黄浦区徐家汇路1弄3号1503室",
    邮政编码: 200023,
    联系电话: 13801611843,
    社会关系1: "父",
    姓名1: "薛飞",
    联系电话1: 13601646060,
    社会关系2: "母",
    姓名2: "何玉倩",
    联系电话2: 13801611843,
    班级: 11,
  },
  {
    学号: 1142,
    姓名: "杨睿铭",
    性别: "男",
    证件号码: "310103200712107011",
    初中学校: "上海交通大学附属黄浦实验中学",
    招生学校: "浦江校区",
    语文: 113,
    数学: 131,
    外语: 139.0,
    综合测试: 126,
    物理: 60,
    化学: 41,
    跨学科案例分析: 10,
    历史: 58,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 656.0,
    户籍地址: "淡水路345弄21号503室",
    通讯地址: "东台路277号1005室",
    邮政编码: 200021,
    联系电话: 13917676734,
    社会关系1: "父",
    姓名1: "杨烨",
    联系电话1: 13818885610,
    社会关系2: "母",
    姓名2: "钱丽萍",
    联系电话2: 13917676734,
    班级: 11,
  },
  {
    学号: 1143,
    姓名: "张乐轩",
    性别: "男",
    证件号码: "310112200711200616",
    初中学校: "上海市闵行区纪王学校",
    招生学校: "浦江校区",
    语文: 132,
    数学: 119,
    外语: 139.0,
    综合测试: 134,
    物理: 66,
    化学: 43,
    跨学科案例分析: 10,
    历史: 59,
    道德与法治: 59,
    体育: 30,
    附加分: 0,
    录取总分: 672.0,
    户籍地址: "闵行区华漕镇纪西村百聚桥25号",
    通讯地址: "青浦区华新镇新府中路1331弄72号1101室",
    邮政编码: 201708,
    联系电话: 13472812030,
    社会关系1: "父",
    姓名1: "张伟刚",
    联系电话1: 13472812030,
    社会关系2: "母",
    姓名2: "马玉美",
    联系电话2: 18221386872,
    班级: 11,
  },
  {
    学号: 1142,
    姓名: "顾凤盈",
    性别: "女体",
    证件号码: "310103200710124045",
    初中学校: "上海市向明初级中学",
    招生学校: "上海市向明中学",
    语文: 120,
    数学: 127,
    外语: 141.5,
    综合测试: 126,
    物理: 62,
    化学: 40,
    跨学科案例分析: 9,
    历史: 59,
    道德与法治: 58,
    体育: 30,
    附加分: 0,
    录取总分: 661.5,
    户籍地址: "黄浦区建国中路18号3号楼402室",
    通讯地址: "长宁区长宁支路237弄1号603室",
    邮政编码: 200025,
    联系电话: 13816023542,
    社会关系1: "父",
    姓名1: "顾健",
    联系电话1: 13817333208,
    社会关系2: "母",
    姓名2: "章筱珺",
    联系电话2: 13816023542,
    班级: 11,
  },
  {
    学号: 1143,
    姓名: "徐婧妮",
    性别: "女体",
    证件号码: "310103200804104045",
    初中学校: "上海市向明初级中学",
    招生学校: "上海市向明中学",
    语文: 123,
    数学: 113,
    外语: 132.0,
    综合测试: 125,
    物理: 66,
    化学: 39,
    跨学科案例分析: 5,
    历史: 56,
    道德与法治: 56,
    体育: 30,
    附加分: 0,
    录取总分: 635.0,
    户籍地址: "瑞金二路129弄79号1楼",
    通讯地址: "瑞金二路129弄79号1楼",
    邮政编码: 200020,
    联系电话: 13764616867,
    社会关系1: "父",
    姓名1: "徐超",
    联系电话1: 13817190901,
    社会关系2: "母",
    姓名2: "李晓进",
    联系电话2: 13764616867,
    班级: 11,
  },
];

const API_KEY = "5d630c3e6f0c259cec139b15e9f3028f";
const API_PASSWORD = "ff320aaa2b6423167056adffb8658972";
//@ts-ignore
window._AMapSecurityConfig = {
  securityJsCode: API_PASSWORD,
};

export default function MapContainer() {
  const [mapInstance, setMapInstance] = useState(null);
  const [AMapInstance, setAMapInstance] = useState(null);
  //   const [trafficLayerInstance, setTrafficLayerInstance] = useState(null);

  // Basic Map Configuration
  useEffect(() => {
    AMapLoader.load({
      key: API_KEY,
      version: "2.0",
      plugins: [""],
    }).then((AMap) => {
      const map = new AMap.Map("container", {
        viewMode: "3D",
        zoom: 9,
        center: [121.516611, 30.837185],
        pitch: 0,
        mapStyle: "amap://styles/fresh",
      });
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.ControlBar",
          "AMap.GeoJSON",
          "AMap.Geocoder",
          "AMap.Marker",
        ],
        function () {
          map.addControl(new AMap.ToolBar());
          map.addControl(new AMap.Scale());
          map.addControl(new AMap.ControlBar());
        }
      );
      //   const trafficLayer = new AMap.TileLayer.Traffic();
      setMapInstance(map);
      setAMapInstance(AMap);
      studentData.forEach((student) => {
        const address = student.通讯地址;
        console.log(address);
        const geocoder = new AMap.Geocoder({
          city: "上海市",
          radius: 1000,
        });
        console.log(geocoder);
        geocoder.getLocation(address, (status, result) => {
          if (status === "complete" && result.geocodes.length) {
            console.log(result);
            const stuLat = result.geocodes[0].location.lat;
            const stuLng = result.geocodes[0].location.lng;
            const marker = new AMap.Marker({
              position: [stuLng, stuLat],
              map: map,
              title: student.姓名,
            });

            const infoWindow = new AMap.InfoWindow({
              content: '<div class="info-window">' + student.姓名 + "</div>",
              offset: new AMap.Pixel(0, -30),
            });

            // 添加点击事件，显示信息窗口
            marker.on("click", function () {
              infoWindow.open(map, marker.getPosition());
            });
          }
        });
      });
      //   setTrafficLayerInstance(trafficLayer);
      //   console.log(AMap);
    });
  }, []);

  return (
    <>
      <div id="container" className="map" style={{ height: "100vh" }}></div>
      {/* <TrafficButton
        map={mapInstance}
        AMap={AMapInstance}
        trafficLayer={trafficLayerInstance}
      /> */}
      <AddMarker map={mapInstance} AMap={AMapInstance} />
      <RouteOptimize map={mapInstance} AMap={AMapInstance} />
    </>
  );
}
