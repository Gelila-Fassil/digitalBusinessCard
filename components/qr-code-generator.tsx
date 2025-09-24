"use client"

export function QRCodeGenerator() {
  const businessCardUrl = "https://digital-business-card-beta-one.vercel.app/"
  
  // Generate QR code using a free QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(businessCardUrl)}`

  return (
    <div className="flex flex-col items-center">
      <div className="p-2 bg-white rounded-lg shadow-sm border border-border/20">
        <img
          src={qrCodeUrl}
          alt="QR Code for digital business card"
          width={100}
          height={100}
          className="rounded-sm"
        />
      </div>
    </div>
  )
}
