"use client";
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button, Form, Input, Card, Typography, Alert } from 'antd';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Initialize Supabase Client
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const onFinish = async (values: any) => {
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (error) {
            // Fallback: Try sign up if login fails (demo purpose) or just show error
            // For real app, differentiate login/signup
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/'); // Redirect to home
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card title={<Typography.Title level={3} className="text-center m-0">Đăng Nhập</Typography.Title>} className="w-full max-w-md shadow-lg">
                {error && <Alert message={error} type="error" showIcon className="mb-4" />}
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                        <Input size="large" placeholder="email@example.com" />
                    </Form.Item>
                    <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                        <Input.Password size="large" placeholder="••••••••" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block loading={loading} className="bg-blue-600">
                            Đăng Nhập
                        </Button>
                    </Form.Item>
                    <div className="text-center">
                        <Typography.Text type="secondary">Chưa có tài khoản? (Liên hệ Admin demo)</Typography.Text>
                    </div>
                </Form>
            </Card>
        </div>
    );
}
