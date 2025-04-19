export interface QRCode {
    width: number,
    height: number,
    data:string,
    image:string,
    margin: number,
    qrOptions:{
        typeNumber:number,
        mode:Mode,
        errorCorrectionLevel:string
    },
    imageOptions:{
        hideBackgroundDots:boolean,
        imageSize:number,
        margin:number
    },
    dotsOptions:{
        type:DotsStyle,
        color: string
    },
    backgroundOptions:{
        color:string,
        gradient?:{
            type:string,
            colorStops:{
                offset: number,
                color: string
            }[]
        }
    },
    cornersSquareOptions:{
        type:CornersSquareStyle,
        color:string
    },
    cornersDotOptions:{
        type:CornersDotStyle,
        color:string
    }

}
export enum DotsStyle {
    rounded = 'rounded',
    dots= 'dots',
    classy= 'classy',
    classyRounded= 'classy-rounded',
    square= 'square',
    extraRrounded= 'extra-rounded'
}

export enum CornersSquareStyle {
    none = 'none',
    square= 'square',
    dot= 'dot',
    extraRrounded= 'extra-rounded'
}

export enum CornersDotStyle {
    none = 'none',
    square= 'square',
    dot= 'dot',
}

export enum ErrorCorrectionLevel {
    L = 'L',
    M = 'M',
    Q = 'Q',
    H = 'H'

}

export enum Mode {
    Numeric = 'Numeric',
    Alphanumeric= 'Alphanumeric',
    Byte = 'Byte',
    Kanji = 'Kanji'
}
export enum DownloadQR {
    png = 'png',
    jpeg = 'jpeg',
    webp = 'webp',
    svg = 'svg'
}