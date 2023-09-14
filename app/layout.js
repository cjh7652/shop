import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'

import { getServerSession } from 'next-auth'
import {authOptions} from '@/pages/api/auth/[...nextauth]'
import LogOutBtn from './LogOutBtn'
import register from './register/page'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session=await getServerSession(authOptions)
  if(session){
    console.log(session)
  }
  

  return (
    <html lang="en">
      <Head>
         <title>쇼핑몰</title>
         <meta  name="description" content="쇼핑몰 nextjs로 만들기"/>
         <meta  name="keyword" content="로그인만들기, 회원가입 만들기, db생성하기"/>
      </Head>
      <body className={inter.className}>
        
        <div className="top-logo">
          <Link href="/"><img src="/img/logo.jpg" alt="logo" /></Link>
        </div>
        <div className="g-menu">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>{session ? <LogOutBtn></LogOutBtn> : <LoginBtn></LoginBtn>}</li>
            <li><Link href="/register">Join</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/notice">Notice</Link></li>
          </ul>
        </div>
        <nav className="menu">
          <ul>
            <li><Link href="/best100">BEST100</Link></li>
            <li><Link href="/new">NEW</Link></li>
            <li><Link href="/dress">DRESS</Link></li>
            <li><Link href="/top">TOP</Link></li>
            <li><Link href="/bottom">BOTTOM</Link></li>
            <li><Link href="/outer">OUTER</Link></li>
            <li><Link href="/acc">ACC</Link></li>
            <li><Link href="/sale">SALE</Link></li>
          </ul>
        </nav>
        {children}
        <div className="footer">
          <div className="footer-inner">
            <ul>
              <li>
                <h4>NOTIFICATION</h4>
                <ul>
                  <li><Link href="/">회사소개</Link></li>
                  <li><Link href="/">이용약관</Link></li>
                  <li><Link href="/">이용안내</Link></li>
                  <li><Link href="/">개인정보 취급방침</Link></li>
                  <li><Link href="/">협찬/제휴문의</Link></li>
                </ul>
              </li>
              <li>
                <h4>COMPANY INFOMATION</h4>
                <ul>
                  <li><Link href="/">Company.(주)현컴퍼니</Link></li>
                  <li><Link href="/">Address.서울 서초구 일성빌딩 9층 905호</Link></li>
                  <li><Link href="/">Owner.조지현</Link></li>
                  <li><Link href="/"> Business License.204-12-111111</Link></li>
                  <li><Link href="/">Copyright &copyl cho line. All Rights Reserved.</Link></li>
                </ul>
              </li>
              <li>
                <h4>BANK ACCOUNT</h4>
                <p>무통장 입금안내</p>
                <ul>
                  <li><Link href="/">국민111111111</Link></li>
                  <li><Link href="/">농협222222222</Link></li>
                  <li><Link href="/">신한333333333</Link></li>
                  <li><Link href="/">우리4444444444</Link></li>
                  <li><Link href="/">기업5555555555</Link></li>
                </ul>
              </li>
              <li>
                <h4>CS CENTER</h4>
                <ul>
                  <li><Link href="/">Weekday AM 10:00-PM 4:00</Link></li>
                  <li><Link href="/">Lunch PM 12: 00 - PM 1:00</Link></li>
                  <li><Link href="/">SAT/SUN/HOLIDAY.OFF</Link></li>
                  <li><span>전화량이 많아 게시판을 이용해주시면 <br /> 빠르게 답변을 들으실수 있습니다.</span></li>
                </ul>
                <p>1544-8282</p>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}