# SQL 语句

```sql
-- 增 insert into
insert into table vlaues (v1,v2,v3,...)

-- 删
delete from table where condition

-- 改
update T
SET column = vlaue,
where condition

-- 查
select * from table (join table2)
    where condition  and condition2
    order by column desc|asc
    LIMIT 1开始start,  5条数length
```

## 链接数据库

```js
const { Client } = require("pg")

const client = new Client({
    host: "my.database-server.com",
    port: 5334,
    database: "database-name",
    user: "database-user",
    password: "secretpassword!!"
})

client.connect()
client.query("SELECT NOW()", (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
})
```
