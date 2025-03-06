import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sgMail from '@sendgrid/mail';

// 初始化 SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 驗證必填欄位
    const requiredFields = ['name', 'clinicName', 'email', 'phone', 'service', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `缺少必填欄位：${field}` },
          { status: 400 }
        );
      }
    }

    // 準備郵件內容
    const msg = {
      to: process.env.CONTACT_EMAIL || 'contact@aidea-med.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@aidea-med.com',
      subject: `新的聯絡表單提交 - ${body.clinicName}`,
      text: `
        姓名：${body.name}
        診所名稱：${body.clinicName}
        電子郵件：${body.email}
        電話：${body.phone}
        感興趣的服務：${body.service}
        
        訊息內容：
        ${body.message}
      `,
      html: `
        <h2>新的聯絡表單提交</h2>
        <p><strong>診所名稱：</strong>${body.clinicName}</p>
        <p><strong>姓名：</strong>${body.name}</p>
        <p><strong>電子郵件：</strong>${body.email}</p>
        <p><strong>電話：</strong>${body.phone}</p>
        <p><strong>感興趣的服務：</strong>${body.service}</p>
        <p><strong>訊息內容：</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 發送郵件
    await sgMail.send(msg);

    // 發送確認郵件給客戶
    const confirmationMsg = {
      to: body.email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@aidea-med.com',
      subject: '感謝您的諮詢 - Aidea:Med',
      text: `
        親愛的 ${body.name} 醫師：

        感謝您對 Aidea:Med 的服務感興趣。我們已經收到您的諮詢表單，我們的團隊會盡快與您聯繫。

        以下是您提交的資訊：
        診所名稱：${body.clinicName}
        感興趣的服務：${body.service}

        如果您有任何問題，歡迎隨時與我們聯繫。

        祝您順心
        Aidea:Med 團隊
      `,
      html: `
        <h2>感謝您的諮詢</h2>
        <p>親愛的 ${body.name} 醫師：</p>
        <p>感謝您對 Aidea:Med 的服務感興趣。我們已經收到您的諮詢表單，我們的團隊會盡快與您聯繫。</p>
        <p><strong>以下是您提交的資訊：</strong></p>
        <ul>
          <li>診所名稱：${body.clinicName}</li>
          <li>感興趣的服務：${body.service}</li>
        </ul>
        <p>如果您有任何問題，歡迎隨時與我們聯繫。</p>
        <p>祝您順心<br>Aidea:Med 團隊</p>
      `,
    };

    await sgMail.send(confirmationMsg);

    return NextResponse.json({ message: '表單提交成功' });
  } catch (error) {
    console.error('表單提交錯誤：', error);
    return NextResponse.json(
      { error: '表單提交失敗，請稍後再試' },
      { status: 500 }
    );
  }
} 