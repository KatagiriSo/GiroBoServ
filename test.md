curl localhost:3000/api/getTest?name=hoge
curl -X POST localhost:3000/api/postTest -d "name=hoge"




# mongodb for mac
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

```bash
brew tap mongodb/brew
brew install mongodb-community@4.4
```
# 参考
https://qiita.com/ngmr_mo/items/73cc7160d002a4989416

# 以下は不使用
https://reffect.co.jp/windows/mac-mongodb-install

brew tap mongodb/brew
brew install mongodb-community

## plistのエラー
https://stackoverflow.com/questions/58034955/read-only-file-system-when-attempting-mkdir-data-db-on-mac
```bash
sudo chown -R $(whoami) $(brew --prefix)/*
```


/usr/local/Cellar/mongodb-database-tools/100.2.0

mongod -version

## サービス開始
brew services start mongodb-community
brew services start mongodb/brew/mongodb-community

## サービス停止
brew services stop mongodb/brew/mongodb-community
brew services stop mongodb-community

mongod --config /usr/local/etc/mongod.conf


## 
sudo mongod --dbpath /var/db/mongo/
