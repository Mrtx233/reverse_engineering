qiao_xhr = new XMLHttpRequest();
qiao_xhr.open("post", "https://qikan.cqvip.com/Search/SearchList")
qiao_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")

// js发送ajax的时候
// form data -> xxx=xxxx&xxxx=xxx
// request payload -> {xxx: xxx, xxx: xxx}
qiao_xhr.send("searchParamModel=%7B%22ObjectType%22%3A1%2C%22SearchKeyList%22%3A%5B%5D%2C%22SearchExpression%22%3A%22%22%2C%22BeginYear%22%3A%22%22%2C%22EndYear%22%3A%22%22%2C%22UpdateTimeType%22%3A%22%22%2C%22JournalRange%22%3A%22%22%2C%22DomainRange%22%3A%22%22%2C%22ClusterFilter%22%3A%22%22%2C%22ClusterLimit%22%3A0%2C%22ClusterUseType%22%3A%22Article%22%2C%22UrlParam%22%3A%22%22%2C%22Sort%22%3A%220%22%2C%22SortField%22%3Anull%2C%22UserID%22%3A%220%22%2C%22PageNum%22%3A2%2C%22PageSize%22%3A20%2C%22SType%22%3A%22%22%2C%22StrIds%22%3A%22%22%2C%22IsRefOrBy%22%3A0%2C%22ShowRules%22%3A%22%22%2C%22IsNoteHistory%22%3A0%2C%22AdvShowTitle%22%3A%22%E7%A9%BA%E6%A3%80%E7%B4%A2%22%2C%22ObjectId%22%3A%22%22%2C%22ObjectSearchType%22%3A0%2C%22ChineseEnglishExtend%22%3A0%2C%22SynonymExtend%22%3A0%2C%22ShowTotalCount%22%3A77333803%2C%22AdvTabGuid%22%3A%22c897ab33-d37b-3c22-d96a-697857f99c29%22%7D");

