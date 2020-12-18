#!/usr/bin/python

# get the GPIO Library and SPI Library
import RPi.GPIO as GPIO
import spidev
import time



def write_pot(input):
    msb = input >> 8
    lsb = input & 0xFF
    print(msb, ' ', lsb)
    spi.xfer([msb, lsb])

try:
    #Initialze the SPI 
    spi = spidev.SpiDev()

    # create spi object
    # spi port 0, device (CS)
    spi.open(0,0)

    # transfer data ->  1 to 255 
    for i in range(0x00, 0xFF, 1):
        time.sleep(1)
        write_pot(i)
    
    spi.close()


            
except KeyboardInterrupt:
    # Ctrl+C pressed, so...
    spi.close()
