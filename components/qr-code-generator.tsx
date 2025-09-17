"use client"

import { useEffect, useRef } from "react"

export function QRCodeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simple QR code placeholder - in a real app, you'd use a QR code library
    const size = 120
    canvas.width = size
    canvas.height = size

    // Create a simple pattern that looks like a QR code
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, size, size)

    ctx.fillStyle = "#FFFFFF"
    const blockSize = 6

    // Create a pattern
    for (let x = 0; x < size; x += blockSize) {
      for (let y = 0; y < size; y += blockSize) {
        if ((x + y) % (blockSize * 2) === 0) {
          ctx.fillRect(x, y, blockSize, blockSize)
        }
      }
    }

    // Add corner squares (typical QR code feature)
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, blockSize * 3, blockSize * 3)
    ctx.fillRect(size - blockSize * 3, 0, blockSize * 3, blockSize * 3)
    ctx.fillRect(0, size - blockSize * 3, blockSize * 3, blockSize * 3)

    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(blockSize, blockSize, blockSize, blockSize)
    ctx.fillRect(size - blockSize * 2, blockSize, blockSize, blockSize)
    ctx.fillRect(blockSize, size - blockSize * 2, blockSize, blockSize)
  }, [])

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Samrawit Getachew
ORG:DID – Design Detailing TM
TITLE:General Manager
TEL:+1234567890
EMAIL:samrawit@diddesign.com
URL:https://diddesign.com
END:VCARD`

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="p-3 bg-white rounded-lg shadow-inner">
        <canvas ref={canvasRef} className="border border-gray-200 rounded" />
      </div>
      <p className="text-xs text-muted-foreground text-center">Scan to save contact details</p>
    </div>
  )
}
