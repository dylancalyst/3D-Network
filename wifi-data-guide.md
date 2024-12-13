# Guia de Dados Wi-Fi - 3D Network Monitor

Este guia explica como integrar e utilizar dados Wi-Fi no 3D Network Monitor.

## Visão Geral

O 3D Network Monitor pode exibir informações sobre redes Wi-Fi, como SSID, canal, intensidade do sinal e número de dispositivos conectados.  Esses dados podem ser usados para monitorar o desempenho da rede Wi-Fi e identificar possíveis problemas de cobertura.

## Integração de Dados

Os dados Wi-Fi são integrados ao 3D Network Monitor através de uma API REST.  O sistema espera receber os dados no seguinte formato JSON:

```json
[
 {
   "ssid": "Nome da Rede Wi-Fi",
   "channel": 6,
   "signalStrength": 80,
   "connectedDevices": 10,
   "latitude": -23.5505, // Latitude do ponto de acesso
   "longitude": -46.6333 // Longitude do ponto de acesso
 },
 {
   "ssid": "Outra Rede Wi-Fi",
   "channel": 11,
   "signalStrength": 90,
   "connectedDevices": 5,
   "latitude": -22.9068, // Latitude do ponto de acesso
   "longitude": -43.1729 // Longitude do ponto de acesso
 }
]

