"use client";
import { Form, Input } from "@/components/ui/Input/Input";
import React, { useRef } from "react";
import Box from "../login/Box";
import Link from "next/link";

const page = () => {
    return (
        <Form action={()=> {}}>
            <div className="space-y-7 py-12">
                <div className="space-y-1">
                    <h1 className="font-medium">Employer Signup</h1>
                    <p className="text-sm text-slate-700">
                        Create an employer account
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <label
                            className="text-sm text-slate-700"
                            htmlFor="company"
                        >
                            Company name*
                        </label>
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="email"
                                placeholder="Enter your company name"
                                id="email"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label
                            className="text-sm text-slate-700"
                            htmlFor="email"
                        >
                            Email*
                        </label>
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="email"
                                placeholder="Enter your company name"
                                id="email"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="space-y-1 flex-1">
                            <label
                                className="text-sm text-slate-700"
                                htmlFor="company"
                            >
                                First Name*
                            </label>
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    name="email"
                                    placeholder="Enter your company name"
                                    id="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="space-y-1 flex-1">
                            <label
                                className="text-sm text-slate-700"
                                htmlFor="company"
                            >
                                Last name*
                            </label>
                            <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                                <span>
                                    <Box />
                                </span>

                                <Input
                                    name="email"
                                    placeholder="Enter your company name"
                                    id="email"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label
                            className="text-sm text-slate-700"
                            htmlFor="company"
                        >
                            Company name*
                        </label>
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <select id="dial_code" name="dial_code">
                                <option value="US">🇺🇸 +1</option>
                                <option value="CA">🇨🇦 +1</option>
                                <option value="NG">🇳🇬 +234</option>
                                <option value="KE">🇰🇪 +254</option>
                                <option value="GH">🇬🇭 +233</option>
                                <option value="ZA">🇿🇦 +27</option>
                                <option value="GB">🇬🇧 +44</option>
                                <option value="IN">🇮🇳 +91</option>
                                <option value="AF">🇦🇫 +93</option>
                                <option value="AX">🇦🇽 +358</option>
                                <option value="AL">🇦🇱 +355</option>
                                <option value="DZ">🇩🇿 +213</option>
                                <option value="AS">🇦🇸 +1684</option>
                                <option value="AD">🇦🇩 +376</option>
                                <option value="AO">🇦🇴 +244</option>
                                <option value="AI">🇦🇮 +1264</option>
                                <option value="AQ">🇦🇶 +672</option>
                                <option value="AG">🇦🇬 +1268</option>
                                <option value="AR">🇦🇷 +54</option>
                                <option value="AM">🇦🇲 +374</option>
                                <option value="AW">🇦🇼 +297</option>
                                <option value="AU">🇦🇺 +61</option>
                                <option value="AT">🇦🇹 +43</option>
                                <option value="AZ">🇦🇿 +994</option>
                                <option value="BS">🇧🇸 +1242</option>
                                <option value="BH">🇧🇭 +973</option>
                                <option value="BD">🇧🇩 +880</option>
                                <option value="BB">🇧🇧 +1246</option>
                                <option value="BY">🇧🇾 +375</option>
                                <option value="BE">🇧🇪 +32</option>
                                <option value="BZ">🇧🇿 +501</option>
                                <option value="BJ">🇧🇯 +229</option>
                                <option value="BM">🇧🇲 +1441</option>
                                <option value="BT">🇧🇹 +975</option>
                                <option value="BO">🇧🇴 +591</option>
                                <option value="BA">🇧🇦 +387</option>
                                <option value="BW">🇧🇼 +267</option>
                                <option value="BV">🇧🇻 +47</option>
                                <option value="BR">🇧🇷 +55</option>
                                <option value="IO">🇮🇴 +246</option>
                                <option value="BN">🇧🇳 +673</option>
                                <option value="BG">🇧🇬 +359</option>
                                <option value="BF">🇧🇫 +226</option>
                                <option value="BI">🇧🇮 +257</option>
                                <option value="KH">🇰🇭 +855</option>
                                <option value="CM">🇨🇲 +237</option>
                                <option value="CV">🇨🇻 +238</option>
                                <option value="KY">🇰🇾 +345</option>
                                <option value="CF">🇨🇫 +236</option>
                                <option value="TD">🇹🇩 +235</option>
                                <option value="CL">🇨🇱 +56</option>
                                <option value="CN">🇨🇳 +86</option>
                                <option value="CX">🇨🇽 +61</option>
                                <option value="CC">🇨🇨 +61</option>
                                <option value="CO">🇨🇴 +57</option>
                                <option value="KM">🇰🇲 +269</option>
                                <option value="CG">🇨🇬 +242</option>
                                <option value="CD">🇨🇩 +243</option>
                                <option value="CK">🇨🇰 +682</option>
                                <option value="CR">🇨🇷 +506</option>
                                <option value="CI">🇨🇮 +225</option>
                                <option value="HR">🇭🇷 +385</option>
                                <option value="CU">🇨🇺 +53</option>
                                <option value="CY">🇨🇾 +357</option>
                                <option value="CZ">🇨🇿 +420</option>
                                <option value="DK">🇩🇰 +45</option>
                                <option value="DJ">🇩🇯 +253</option>
                                <option value="DM">🇩🇲 +1767</option>
                                <option value="DO">🇩🇴 +1849</option>
                                <option value="EC">🇪🇨 +593</option>
                                <option value="EG">🇪🇬 +20</option>
                                <option value="SV">🇸🇻 +503</option>
                                <option value="GQ">🇬🇶 +240</option>
                                <option value="ER">🇪🇷 +291</option>
                                <option value="EE">🇪🇪 +372</option>
                                <option value="ET">🇪🇹 +251</option>
                                <option value="FK">🇫🇰 +500</option>
                                <option value="FO">🇫🇴 +298</option>
                                <option value="FJ">🇫🇯 +679</option>
                                <option value="FI">🇫🇮 +358</option>
                                <option value="FR">🇫🇷 +33</option>
                                <option value="GF">🇬🇫 +594</option>
                                <option value="PF">🇵🇫 +689</option>
                                <option value="TF">🇹🇫 +262</option>
                                <option value="GA">🇬🇦 +241</option>
                                <option value="GM">🇬🇲 +220</option>
                                <option value="GE">🇬🇪 +995</option>
                                <option value="DE">🇩🇪 +49</option>
                                <option value="GI">🇬🇮 +350</option>
                                <option value="GR">🇬🇷 +30</option>
                                <option value="GL">🇬🇱 +299</option>
                                <option value="GD">🇬🇩 +1473</option>
                                <option value="GP">🇬🇵 +590</option>
                                <option value="GU">🇬🇺 +1671</option>
                                <option value="GT">🇬🇹 +502</option>
                                <option value="GG">🇬🇬 +44</option>
                                <option value="GN">🇬🇳 +224</option>
                                <option value="GW">🇬🇼 +245</option>
                                <option value="GY">🇬🇾 +592</option>
                                <option value="HT">🇭🇹 +509</option>
                                <option value="HM">🇭🇲 +672</option>
                                <option value="VA">🇻🇦 +379</option>
                                <option value="HN">🇭🇳 +504</option>
                                <option value="HK">🇭🇰 +852</option>
                                <option value="HU">🇭🇺 +36</option>
                                <option value="IS">🇮🇸 +354</option>
                                <option value="ID">🇮🇩 +62</option>
                                <option value="IR">🇮🇷 +98</option>
                                <option value="IQ">🇮🇶 +964</option>
                                <option value="IE">🇮🇪 +353</option>
                                <option value="IM">🇮🇲 +44</option>
                                <option value="IL">🇮🇱 +972</option>
                                <option value="IT">🇮🇹 +39</option>
                                <option value="JM">🇯🇲 +1876</option>
                                <option value="JP">🇯🇵 +81</option>
                                <option value="JE">🇯🇪 +44</option>
                                <option value="JO">🇯🇴 +962</option>
                                <option value="KZ">🇰🇿 +7</option>
                                <option value="KI">🇰🇮 +686</option>
                                <option value="KP">🇰🇵 +850</option>
                                <option value="KR">🇰🇷 +82</option>
                                <option value="XK">🇽🇰 +383</option>
                                <option value="KW">🇰🇼 +965</option>
                                <option value="KG">🇰🇬 +996</option>
                                <option value="LA">🇱🇦 +856</option>
                                <option value="LV">🇱🇻 +371</option>
                                <option value="LB">🇱🇧 +961</option>
                                <option value="LS">🇱🇸 +266</option>
                                <option value="LR">🇱🇷 +231</option>
                                <option value="LY">🇱🇾 +218</option>
                                <option value="LI">🇱🇮 +423</option>
                                <option value="LT">🇱🇹 +370</option>
                                <option value="LU">🇱🇺 +352</option>
                                <option value="MO">🇲🇴 +853</option>
                                <option value="MK">🇲🇰 +389</option>
                                <option value="MG">🇲🇬 +261</option>
                                <option value="MW">🇲🇼 +265</option>
                                <option value="MY">🇲🇾 +60</option>
                                <option value="MV">🇲🇻 +960</option>
                                <option value="ML">🇲🇱 +223</option>
                                <option value="MT">🇲🇹 +356</option>
                                <option value="MH">🇲🇭 +692</option>
                                <option value="MQ">🇲🇶 +596</option>
                                <option value="MR">🇲🇷 +222</option>
                                <option value="MU">🇲🇺 +230</option>
                                <option value="YT">🇾🇹 +262</option>
                                <option value="MX">🇲🇽 +52</option>
                                <option value="FM">🇫🇲 +691</option>
                                <option value="MD">🇲🇩 +373</option>
                                <option value="MC">🇲🇨 +377</option>
                                <option value="MN">🇲🇳 +976</option>
                                <option value="ME">🇲🇪 +382</option>
                                <option value="MS">🇲🇸 +1664</option>
                                <option value="MA">🇲🇦 +212</option>
                                <option value="MZ">🇲🇿 +258</option>
                                <option value="MM">🇲🇲 +95</option>
                                <option value="NA">🇳🇦 +264</option>
                                <option value="NR">🇳🇷 +674</option>
                                <option value="NP">🇳🇵 +977</option>
                                <option value="NL">🇳🇱 +31</option>
                                <option value="AN"> +599</option>
                                <option value="NC">🇳🇨 +687</option>
                                <option value="NZ">🇳🇿 +64</option>
                                <option value="NI">🇳🇮 +505</option>
                                <option value="NE">🇳🇪 +227</option>
                                <option value="NU">🇳🇺 +683</option>
                                <option value="NF">🇳🇫 +672</option>
                                <option value="MP">🇲🇵 +1670</option>
                                <option value="NO">🇳🇴 +47</option>
                                <option value="OM">🇴🇲 +968</option>
                                <option value="PK">🇵🇰 +92</option>
                                <option value="PW">🇵🇼 +680</option>
                                <option value="PS">🇵🇸 +970</option>
                                <option value="PA">🇵🇦 +507</option>
                                <option value="PG">🇵🇬 +675</option>
                                <option value="PY">🇵🇾 +595</option>
                                <option value="PE">🇵🇪 +51</option>
                                <option value="PH">🇵🇭 +63</option>
                                <option value="PN">🇵🇳 +64</option>
                                <option value="PL">🇵🇱 +48</option>
                                <option value="PT">🇵🇹 +351</option>
                                <option value="PR">🇵🇷 +1939</option>
                                <option value="QA">🇶🇦 +974</option>
                                <option value="RO">🇷🇴 +40</option>
                                <option value="RU">🇷🇺 +7</option>
                                <option value="RW">🇷🇼 +250</option>
                                <option value="RE">🇷🇪 +262</option>
                                <option value="BL">🇧🇱 +590</option>
                                <option value="SH">🇸🇭 +290</option>
                                <option value="KN">🇰🇳 +1869</option>
                                <option value="LC">🇱🇨 +1758</option>
                                <option value="MF">🇲🇫 +590</option>
                                <option value="PM">🇵🇲 +508</option>
                                <option value="VC">🇻🇨 +1784</option>
                                <option value="WS">🇼🇸 +685</option>
                                <option value="SM">🇸🇲 +378</option>
                                <option value="ST">🇸🇹 +239</option>
                                <option value="SA">🇸🇦 +966</option>
                                <option value="SN">🇸🇳 +221</option>
                                <option value="RS">🇷🇸 +381</option>
                                <option value="SC">🇸🇨 +248</option>
                                <option value="SL">🇸🇱 +232</option>
                                <option value="SG">🇸🇬 +65</option>
                                <option value="SK">🇸🇰 +421</option>
                                <option value="SI">🇸🇮 +386</option>
                                <option value="SB">🇸🇧 +677</option>
                                <option value="SO">🇸🇴 +252</option>
                                <option value="SS">🇸🇸 +211</option>
                                <option value="GS">🇬🇸 +500</option>
                                <option value="ES">🇪🇸 +34</option>
                                <option value="LK">🇱🇰 +94</option>
                                <option value="SD">🇸🇩 +249</option>
                                <option value="SR">🇸🇷 +597</option>
                                <option value="SJ">🇸🇯 +47</option>
                                <option value="SZ">🇸🇿 +268</option>
                                <option value="SE">🇸🇪 +46</option>
                                <option value="CH">🇨🇭 +41</option>
                                <option value="SY">🇸🇾 +963</option>
                                <option value="TW">🇹🇼 +886</option>
                                <option value="TJ">🇹🇯 +992</option>
                                <option value="TZ">🇹🇿 +255</option>
                                <option value="TH">🇹🇭 +66</option>
                                <option value="TL">🇹🇱 +670</option>
                                <option value="TG">🇹🇬 +228</option>
                                <option value="TK">🇹🇰 +690</option>
                                <option value="TO">🇹🇴 +676</option>
                                <option value="TT">🇹🇹 +1868</option>
                                <option value="TN">🇹🇳 +216</option>
                                <option value="TR">🇹🇷 +90</option>
                                <option value="TM">🇹🇲 +993</option>
                                <option value="TC">🇹🇨 +1649</option>
                                <option value="TV">🇹🇻 +688</option>
                                <option value="UG">🇺🇬 +256</option>
                                <option value="UA">🇺🇦 +380</option>
                                <option value="AE">🇦🇪 +971</option>
                                <option value="UY">🇺🇾 +598</option>
                                <option value="UZ">🇺🇿 +998</option>
                                <option value="VU">🇻🇺 +678</option>
                                <option value="VE">🇻🇪 +58</option>
                                <option value="VN">🇻🇳 +84</option>
                                <option value="VG">🇻🇬 +1284</option>
                                <option value="VI">🇻🇮 +1340</option>
                                <option value="WF">🇼🇫 +681</option>
                                <option value="YE">🇾🇪 +967</option>
                                <option value="ZM">🇿🇲 +260</option>
                                <option value="ZW">🇿🇼 +263</option>
                            </select>

                            <Input
                                name="email"
                                placeholder="Enter your Phone Number"
                                id="email"
                                type="tel"
                            />
                        </div>
                    </div>
                    <div className="space-y-1 flex-1">
                        <label
                            className="text-sm text-slate-700"
                            htmlFor="company"
                        >
                            Last name*
                        </label>
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="email"
                                placeholder="Enter your company name"
                                id="email"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-1 flex-1">
                        <label
                            className="text-sm text-slate-700"
                            htmlFor="company"
                        >
                            Last name*
                        </label>
                        <div className="border px-2 flex space-x-1 items-center rounded-md overflow-hidden">
                            <span>
                                <Box />
                            </span>

                            <Input
                                name="email"
                                placeholder="Enter your company name"
                                id="email"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <input type="checkbox" />
                        <div className="text-sm text-slate-700">
                            I accept the Loubby{" "}
                            <Link
                                className="text-blue-700 underline"
                                href={"/"}
                            >
                                Terms of Service{" "}
                            </Link>
                            and{" "}
                            <Link
                                className="text-blue-700 underline"
                                href={"/"}
                            >
                                Privacy Policy.
                            </Link>
                        </div>
                    </div>
                    <button
                        disabled
                        className="bg-blue-500 w-full text-center text-white p-3 rounded-lg disabled:opacity-50"
                    >
                        create account
                    </button>
                    <p className="text-sm text-center text-slate-700">
                        Already have an account?{" "}
                        <Link
                            href={"login"}
                            className="text-blue-500 underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </Form>
    );
};

export default page;
