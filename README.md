# lambda-random-image
指定したS3の倍ケット内にある画像ファイルをrandomに返す。
単一のURLでしか指定できないところでrandomに画像を返したいために使うもの。
IFTTTなどの`Image URL`でrandomに画像を変えたい場合などに使用するのを想定。


アップロードする部分は作ってないのでManagement Consoleとかからアップロードしてください。


## SETUP
```
git clone https://github.com/celeron1ghz/lambda-random-image.git
cd lambda-random-image
sls deploy
```

## REQUIRED ENVIRONMENT VARIABLES
Nothing.
