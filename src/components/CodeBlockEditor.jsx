import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import { defaultCode } from '../data/codeSample';
import Button from './Button';
import '../css/code-block.css'

import { motion } from "motion/react"

import toast from 'react-hot-toast';

function CodeBlockEditor() {
    const [value, setValue] = useState(defaultCode)
    const [output, setOutput] = useState('');
    const [result, setResult] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [showTerminal, setShowTerminal] = useState(false);



    const runCode = async () => {
        try {
            const logs = [];
            const customLog = (...args) => logs.push(args.join(' '));

            const sandboxFunc = new Function('console', value);
            sandboxFunc({ log: customLog });

            const logText = logs.join('\n');
            setOutput(logText);
            setShowTerminal(true);

            // Extract info
            const extracted = {
                name: logs.find(l => l.startsWith("Name:"))?.split("Name:")[1]?.trim() || '',
                email: logs.find(l => l.startsWith("Email:"))?.split("Email:")[1]?.trim() || '',
                message: logs.find(l => l.startsWith("Message:"))?.split("Message:")[1]?.trim() || ''
            };

            setResult(extracted);
            const payload = {
                ...extracted,
                access_key: import.meta.env.VITE_EMAIL_ACCESS_KEY
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully");
            } else {
                toast.error("Something Went Wrong");
            }

            setError('');

        } catch (err) {
            setError(err.message);
            setOutput('');
            setResult({ name: '', email: '', message: '' });
        }
    };
    return (
        <>
            <motion.div
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <Editor
                    height="300px"
                    className='codeblock'
                    theme='vs-dark'
                    defaultLanguage='javascript'
                    defaultValue="// type smoething"
                    value={value}
                    onChange={(value, event) => setValue(value)}
                // onMount={onMount}
                />

                <div className="run-code-button">
                    <Button onClick={runCode} text={"Run Code"} />
                </div>

                {error && (
                    <div className="text-red-500 font-mono">Error: {error}</div>
                )}

                {showTerminal && (
                    <div className="terminal">
                        {output}
                    </div>
                )}
            </motion.div>



        </>
    )
}

export default CodeBlockEditor