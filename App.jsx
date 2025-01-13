import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Display from "./components/Display";
import Statement from "./components/Statement";
import StatementsTable from "./components/StatementsTable";
import Navbar from "./components/Navbar";

function App() {
	const [incomeData, setIncomeData] = useState([]);
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className='App'>
				<Display incomeData={incomeData} setIncomeData={setIncomeData} />
				<StatementsTable
					incomeData={incomeData}
					setIncomeData={setIncomeData}
				/>
			</div>
		</div>
	);
}

export default App;
