import { Suspense } from "react";
import PropertiesPage from "./PropertiesPage";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PropertiesPage />
        </Suspense>
    );
}