"use client";
import { Button, Card, Typography } from "antd";
import { LoginOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-50 font-sans p-8">
      <div className="w-full max-w-5xl flex justify-between items-center mb-12">
        <div className="font-bold text-2xl text-blue-600">Open LMS</div>
        <Button type="link" icon={<GithubOutlined />} href="https://github.com" target="_blank">
          GitHub
        </Button>
      </div>

      <main className="flex flex-col items-center text-center max-w-3xl">
        <Title level={1} style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>
          Hệ Thống LMS <span className="text-blue-600">Mã Nguồn Mở</span>
        </Title>
        <Paragraph className="text-lg text-gray-500 mb-8 max-w-2xl">
          Nền tảng thi cử và quản lý học tập đơn giản, miễn phí, hỗ trợ AI và Microservices.
          Xây dựng với Next.js, NestJS và Supabase.
        </Paragraph>

        <div className="flex gap-4">
          <Link href="/login">
            <Button type="primary" size="large" icon={<LoginOutlined />} className="bg-blue-600 h-12 px-8 text-lg">
              Bắt đầu ngay
            </Button>
          </Link>
          <Link href="/about">
            <Button size="large" className="h-12 px-8 text-lg">
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <Title level={4}>Miễn phí & Mở</Title>
            <Paragraph className="text-gray-500">Mã nguồn mở 100%, dễ dàng triển khai và tùy biến cho trường học.</Paragraph>
          </Card>
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <Title level={4}>Trải nghiệm Azota</Title>
            <Paragraph className="text-gray-500">Giao diện đơn giản, tạo đề thi từ file PDF/Word chỉ trong tích tắc.</Paragraph>
          </Card>
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <Title level={4}>Công nghệ Hiện đại</Title>
            <Paragraph className="text-gray-500">Next.js 14, NestJS, Supabase, AI Integrated.</Paragraph>
          </Card>
        </div>
      </main>

      <footer className="mt-16 text-gray-400 text-sm">
        Open LMS ©{new Date().getFullYear()} - Created by Assistant
      </footer>
    </div>
  );
}
