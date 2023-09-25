import json

ndviStatics = dict({
    "min" : 0.04, 
    "max" : 0.87, 
    "media" : 0.3, 
    "mediana" : 0.27,
    "desvio" : 0.09 
})

print(json.dumps(ndviStatics))