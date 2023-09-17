
export const patternSpecialChar = new RegExp('(?=.*[!@#$%^&*])')

export const patternNumber = new RegExp('(?=.*[0-9])')

export const patternUppercase = new RegExp('(?=.*[A-Z])')

export const patternConsecutive = new RegExp('(?!.*(\\w)\\1)[a-zA-Z0-9]+')
