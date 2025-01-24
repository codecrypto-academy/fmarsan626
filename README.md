Generar nodos y cuentas
geth --datadir node2 account new --password pwd.txt

geth --authrpc.port 9552 --ipcpath "nodoe0/geth.ipc" --datadir nodoe0 --syncmode full --http --http.api admin,eth,miner,net,txpool \
--http.port 8545 --allow-insecure-unlock --unlock "e8ed4cf061b265872b239ea0ed8121c47b9c97ec" --password pwd.txt --port 30034 --bootnodes \
"enode://0bdfb3f6349df7461012562ee6e2c5e795e557592183691d24454239233202164b92d48ccd67795709b4e69310330fdf3269db9fe7497b6b913f189506e3ffa4@127.0.0.1:0?discport=30301" \
--mine --miner.etherbase "e8ed4cf061b265872b239ea0ed8121c47b9c97ec" --nodiscover

geth --authrpc.port 9553 --ipcpath "nodoe1/geth.ipc" --datadir nodoe1 --syncmode full --http --http.api admin,eth,miner,net,txpool \
--http.port 8546 --allow-insecure-unlock --unlock "b753ac4d07a77e73c29d4689c1202a21c6425d18" --password pwd.txt --port 30035 --bootnodes \
"enode://0bdfb3f6349df7461012562ee6e2c5e795e557592183691d24454239233202164b92d48ccd67795709b4e69310330fdf3269db9fe7497b6b913f189506e3ffa4@127.0.0.1:0?discport=30301" \
--mine --miner.etherbase "b753ac4d07a77e73c29d4689c1202a21c6425d18" --nodiscover

geth --authrpc.port 9554 --ipcpath "nodoe2/geth.ipc" --datadir nodoe2 --syncmode full --http --http.api admin,eth,miner,net,txpool \
--http.port 8547 --allow-insecure-unlock --unlock "87c30f82cfdb74da33a6f6db4f37471b333650fa" --password pwd.txt --port 30036 --bootnodes \
"enode://0bdfb3f6349df7461012562ee6e2c5e795e557592183691d24454239233202164b92d48ccd67795709b4e69310330fdf3269db9fe7497b6b913f189506e3ffa4@127.0.0.1:0?discport=30301" \
--mine --miner.etherbase "87c30f82cfdb74da33a6f6db4f37471b333650fa" --nodiscover