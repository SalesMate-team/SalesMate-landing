import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';

export default function AuthCallbackPage() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const code = searchParams.get('code');
        const state = searchParams.get('state');

        if (code) {
            // Small delay to ensure UI renders before redirect
            setTimeout(() => {
                try {
                    window.location.href = `minuteai://auth?code=${code}${state ? `&state=${state}` : ''}`;
                    setStatus('success');
                } catch (e) {
                    console.error(e);
                    setStatus('error');
                    setErrorMsg('Failed to launch application');
                }
            }, 1000);
        } else {
            // If there is an error query param
            const error = searchParams.get('error');
            if (error) {
                setStatus('error');
                setErrorMsg(error);
            } else {
                // Just no code present
                setStatus('error');
                setErrorMsg('No authorization code received');
            }
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center space-y-6">

                {status === 'processing' && (
                    <>
                        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Connecting to Zoom...</h1>
                            <p className="text-gray-500">Please wait while we complete the authentication.</p>
                        </div>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Successful!</h1>
                            <p className="text-gray-500">You can now close this window and return to the Minute Desktop App.</p>
                        </div>
                        <div className="pt-4">
                            <p className="text-xs text-gray-400 mb-4">Did the app not open?</p>
                            <button
                                onClick={() => {
                                    const code = searchParams.get('code');
                                    const state = searchParams.get('state');
                                    if (code) {
                                        window.location.href = `minuteai://auth?code=${code}${state ? `&state=${state}` : ''}`;
                                    }
                                }}
                                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors gap-2"
                            >
                                Result App
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-red-600 rotate-45" /> {/* Using CheckCircle rotated as simple X or could import XCircle */}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Authentication Failed</h1>
                            <p className="text-red-500">{errorMsg || 'Something went wrong.'}</p>
                        </div>
                        <div className="pt-4">
                            <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 font-medium">
                                Return to Home
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">Minute AI</p>
            </div>
        </div>
    );
}
