import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Card >
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your information below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <Input
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                                <FieldDescription>
                                    We&apos;ll use this to contact you. We will not share your email
                                    with anyone else.
                                </FieldDescription>
                                <InputError message={errors.email} className="mt-2" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    id="password"
                                    type="password"
                                    required
                                />
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                                <InputError message={errors.password} className="mt-2" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="confirm-password">
                                    Confirm Password
                                </FieldLabel>
                                <Input
                                    value={data.password_confirmation}
                                    onChange={(e) => setData("password_confirmation", e.target.value)}
                                    id="confirm-password"
                                    type="password"
                                    required
                                />
                                <FieldDescription>Please confirm your password.</FieldDescription>
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </Field>
                            <FieldGroup>
                                <Field>
                                    <Button type="submit">Create Account</Button>
                                    <Button variant="outline" type="button">
                                        Sign up with Google
                                    </Button>
                                    <FieldDescription className="px-6 text-center">
                                        Already have an account? <Link href="/login">Sign in</Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}
