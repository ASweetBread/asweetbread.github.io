import config from '@/tailwind.config'
class Device {
    private md: number;
    private sm: number;
    constructor() {
        this.md = Number(config.theme.screens.md.replace('px',''))
        this.sm = Number(config.theme.screens.sm.replace('px',''))
    }
    isH5() {
        return document.documentElement.clientWidth < this.md
    }
    isIpad() {
        return document.documentElement.clientWidth >= this.md && document.documentElement.clientWidth < this.sm
    }
    isPC() {
        return document.documentElement.clientWidth >= this.md
    }
}

export const device = new Device()