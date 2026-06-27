import Checkbox from "@/components/Checkbox";
import InputError from "@/components/InputError";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {"status"}
                </div>
            )}

            <div className="flex flex-col gap-6">
                <Card className="py-8">
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="m@example.com"
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        {canResetPassword && (
                                            <Link
                                                href={route("password.request")}
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) => setData("password", e.target.value)}
                                        required />
                                    <InputError message={errors.password} className="mt-2" />
                                </Field>

                                <Field className="block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    'remember',
                                                    (e.target.checked || false) as false,
                                                )
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                            Remember me
                                        </span>
                                    </label>
                                </Field>

                                <Field>
                                    <Button type="submit" disabled={processing} >Login</Button>
                                    <Button variant="outline" type="button" disabled={processing} >
                                        Login with Google
                                    </Button>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account? <Link href="/register">Sign up</Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </GuestLayout>
    );
}
