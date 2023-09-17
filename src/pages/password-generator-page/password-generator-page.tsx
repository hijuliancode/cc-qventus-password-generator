import { useState } from "react"
import { CheckCircleOutlined, CloseCircleOutlined, CopyOutlined, EyeInvisibleOutlined, EyeOutlined, HeartOutlined, ReloadOutlined } from "@ant-design/icons"
import { patternSpecialChar, patternNumber, patternUppercase } from '@common:patterns/index'
import { hasConsecutiveCharacters } from "@/common/utils"
import { lowercase, numbers, specialCharacters, uppercase } from "@/common"

export const PasswordGeneratorPage = () => {
  const [type, setType] = useState<'password' | 'text'>('password')
  const [password, setPassword] = useState('')

  const [passwordLength] = useState(18)

  const [hasSpecialChar, setHasSpecialChar] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasUppercase, setHasUppercase] = useState(false)
  const [hasConsecutive, setHasConsecutive] = useState(false)

  const [includeSpecialChar, setIncludeSpecialChar] = useState(true)
  const [includeNumber, setIncludeNumber] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeConsecutive, setIncludeConsecutive] = useState(true)

  const handleChange = (value: string) => {
    setPassword(value)

    if (patternSpecialChar.test(value)) {
      setHasSpecialChar(true)
    } else {
      setHasSpecialChar(false)
    }

    if (patternNumber.test(value)) {
      setHasNumber(true)
    } else {
      setHasNumber(false)
    }

    if (patternUppercase.test(value)) {
      setHasUppercase(true)
    } else {
      setHasUppercase(false)
    }

    if (hasConsecutiveCharacters(value)) {
      setHasConsecutive(true)
    } else {
      setHasConsecutive(false)
    }
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password)
  }

  const generatePassword = () => {
    let newPassword = '';

    if (includeSpecialChar) {
      newPassword = newPassword + specialCharacters;
    }

    if (includeNumber) {
      newPassword = newPassword + numbers;
    }

    if (includeUppercase) {
      newPassword = newPassword + uppercase + lowercase;
    }

    return newPassword;
  };

  const handleGeneratePassword = (): void => {
    const newPassword = generatePassword();
    setPassword(formatPassword(newPassword));
    handleChange(formatPassword(newPassword));
  };

  const formatPassword = (listOfCharacters: string): string => {
    let newPassword = '';
    const listOfCharactersLength = listOfCharacters.length;

    for (let i = 0; i < passwordLength; i++) {
      newPassword += listOfCharacters.charAt(Math.floor(Math.random() * listOfCharactersLength));
    }

    if (hasConsecutive) {
      if (hasConsecutiveCharacters(newPassword)) {
        return formatPassword(listOfCharacters);
      }
    }

    return newPassword;
  };


  return (
    <div className="bg-white/10 backdrop-blur-sm flex flex-col pt-4 pb-6 px-4 rounded-md shadow-xl h-full">
      {/* Tittle */}
      <h1 className="font-regular text-xl leading-none mb-4 flex w-full">Password Generator</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full">
          {/* Input Field */}
          <div className="relative flex">
            <input
              type={type}
              value={password}
              maxLength={passwordLength}
              onChange={(e) => handleChange(e.target.value)}
              className="rounded-s-lg border-gray-400 w-full border-r-0"
              placeholder="Please put your password"
            />
            <button
              type="button"
              className="bg-blue-600 flex items-center justify-center rounded-r-lg p-2 w-8 basis-6 "
              onClick={() => handleCopyPassword()}
            >
              <CopyOutlined className="text-white text-md leading-none" />
            </button>
            <div className="cursor-pointer absolute right-11 top-1/2 -translate-y-1/2">
              {type === 'password' ? (
                <span onClick={() => setType('text')}>
                  <EyeOutlined className="text-gray-700 text-2xl leading-none" />
                </span>
              ) : (
                <span onClick={() => setType('password')}>
                  <EyeInvisibleOutlined className="text-gray-700 text-2xl leading-none" />
                </span>
              )}
            </div>
          </div>

          {/* Password Filters */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              <input
                checked={includeSpecialChar}
                onChange={(e) => setIncludeSpecialChar((e.target as HTMLInputElement).checked)}
                id="id-check-special-characters"
                type="checkbox"
                className="rounded-md border-gray-400 cursor-pointer"
              />
              <label htmlFor="id-check-special-characters" className="cursor-pointer" >Include special characters</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                checked={includeNumber}
                onChange={(e) => setIncludeNumber((e.target as HTMLInputElement).checked)}
                id="id-check-numbers"
                type="checkbox"
                className="rounded-md border-gray-400 cursor-pointer"
              />
              <label htmlFor="id-check-numbers" className="cursor-pointer" >Include numbers</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase((e.target as HTMLInputElement).checked)}
                id="id-check-uppercase"
                type="checkbox"
                className="rounded-md border-gray-400 cursor-pointer"
              />
              <label htmlFor="id-check-uppercase" className="cursor-pointer" >Include uppercase letters</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                checked={includeConsecutive}
                onChange={(e) => setIncludeConsecutive((e.target as HTMLInputElement).checked)}
                id="id-check-consecutive"
                type="checkbox"
                className="rounded-md border-gray-400 cursor-pointer"
              />
              <label htmlFor="id-check-consecutive" className="cursor-pointer">Has NO consecutive letters</label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-lg leading-none">
              {hasSpecialChar ? (
                <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              )}
              <p>Has one or more of these special characters: !@#$%^&*</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              {hasNumber ? (
                <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              )}
              <p>Has a number / digit</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              {hasUppercase ? (
                <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              )}
              <p>Has a uppercase letter</p>
            </li>
            <li className="flex items-center gap-3 text-lg leading-none">
              {hasConsecutive ? (
                <CheckCircleOutlined className="text-green-500 text-2xl leading-none" />
              ) : (
                <CloseCircleOutlined className="text-red-500 text-2xl leading-none" />
              )}
              <p>Has NO consecutive letters***</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <button onClick={handleGeneratePassword} type="button" className="bg-blue-500 text-white rounded-md px-4 py-2 w-full flex items-center justify-center gap-3 active:bg-blue-700 transition-all ease-linear">
          Generate Password
          <ReloadOutlined />
        </button>
        <button disabled type="button" className="bg-pink-500 text-white rounded-md px-4 py-2 w-full ml-4 flex items-center justify-center gap-3 disabled:bg-pink-100 disabled:text-pink-300 disabled:cursor-no-drop">
          Save Password
          <HeartOutlined />
        </button>
      </div>
    </div>
  )
}
