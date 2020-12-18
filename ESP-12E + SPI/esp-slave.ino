#include <SPI.h>



void setup() {
    SPI.beginTransaction(SPISettings(14000000, MSBFIRST, SPI_MODE0));
    SPI.begin();
}