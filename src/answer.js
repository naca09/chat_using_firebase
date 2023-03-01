/// QPS = Concurrent / RT 
const PV = 2000000;
const concurrent = PV * 0.8;
const RT = (24 * 60 * 60) / 0.2;

const QPS = CONCURRENT / RT
consolog({ QPS })