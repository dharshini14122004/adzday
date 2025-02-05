import { useState } from "react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";

// ColorPicker Component
const ColorPicker = ({ colors, setColors, setColorChanged, setSectionStatus }) => {
  const addColor = () => {
    if (colors.length < 2) {
      setColors([...colors, { label: `Brand Color ${colors.length + 1}`, value: "#FFFFFF" }]);
    }
  };

  const updateColor = (index, newValue) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? { ...color, value: newValue } : color
    );
    setColors(updatedColors);
    setColorChanged(true); // Indicate that a color has been changed

    // Update the section status to "Completed" if at least one color is selected
    setSectionStatus("Completed");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg flex items-center w-full gap-4">
      <div className="flex flex-grow gap-4">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-md flex-grow">
            <span className="font-semibold flex-shrink-0">{color.label}</span>
            <div className="flex items-center gap-2 justify-end w-1/2 ml-auto">
              <div
                className="flex items-center justify-between w-full text-center font-semibold rounded-md py-1 px-3"
                style={{ backgroundColor: color.value, color: "#000" }}
              >
                <input
                  type="color"
                  value={color.value}
                  onChange={(e) => updateColor(index, e.target.value)}
                  className="w-8 h-8 cursor-pointer"
                />
                <span className="text-sm">{color.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={addColor}
        className="p-2 rounded-lg bg-white shadow-md flex items-center justify-center text-black font-bold text-lg border border-gray-300 w-12 h-12"
        disabled={colors.length >= 3}
      >
        +
      </button>
    </div>
  );
};

// AdPlatforms Component
const adPlatforms = [
  { name: "Meta Ads", bgColor: "bg-[#1E0E41]", textColor: "text-white" },
  { name: "Google Ads", bgColor: "bg-[#FF1E60]", textColor: "text-white" },
  { name: "Linkedin Ads", bgColor: "bg-[#FF1E60]", textColor: "text-white" },
  { name: "Pinterest Ads", bgColor: "bg-[#FF1E60]", textColor: "text-white" },
];

// ImagePreview Component
const ImagePreview = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm h-full flex flex-col justify-center items-center sticky top-4">
      <div className="max-h-[400px] max-w-[300px] overflow-auto">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Brand Preview"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="text-gray-700 font-semibold mt-4">Your branding is here!</p>
    </div>
  );
};

// AdvancedSetup Component
const AdvancedSetup = () => {
  const [selectedFont, setSelectedFont] = useState("Default (Recommended)");

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg">
      {/* Change Font */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
        <span className="font-medium">Change Font</span>
        <select
          className="border rounded p-2"
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          <option value="Default (Recommended)">Default (Recommended)</option>
          <option value="Arial">Arial</option>
          <option value="Roboto">Roboto</option>
        </select>
      </div>

      {/* Alternative Logo */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
        <span className="font-medium">Alternative Logo</span>
        <label className="flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer">
          <span className="text-gray-500">Drag and drop or click here</span>
          <input type="file" className="hidden" />
        </label>
      </div>

      {/* Ad Platform Buttons */}
      {adPlatforms.map((platform, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <span className="font-medium flex items-center gap-2">
            {platform.name}
          </span>
          <button className={`px-4 py-2 rounded-lg ${platform.bgColor} ${platform.textColor}`}>
            Select Ad Account
          </button>
        </div>
      ))}
    </div>
  );
};

export default function CreateBrand() {
  const [sections, setSections] = useState([
    { title: "Write Brand Name & Description", status: "Incomplete", expanded: true, brandName: "", brandDescription: "" },
    { title: "Select Brand Logo", status: "Incomplete", expanded: false, logo: null },
    { title: "Select Brand Colors", status: "Incomplete", expanded: false },
    { title: "Advanced Setup", status: "Optional", expanded: false },
  ]);

  const [colors, setColors] = useState([
    { label: "Brand Color 1", value: "#FACA2E" },
    { label: "Brand Color 2", value: "#ECECEC" },
  ]);

  const [selectedFont, setSelectedFont] = useState("Default (Recommended)");
  const [colorChanged, setColorChanged] = useState(false); // Track if a color has been changed

  const toggleSection = (index) => {
    setSections((prevSections) => {
      const updatedSections = prevSections.map((section, i) => {
        if (i === index) {
          return { ...section, expanded: true }; // Expand current section
        }
        return { ...section, expanded: false }; // Collapse all others
      });
      return updatedSections;
    });
  };

  const handleBrandNameChange = (event) => {
    const updatedSections = sections.map((section, i) => {
      if (i === 0) {
        return { ...section, brandName: event.target.value };
      }
      return section;
    });

    // Mark as completed if both name and description are filled
    updatedSections[0].status = updatedSections[0].brandName && updatedSections[0].brandDescription ? "Completed" : "Incomplete";

    setSections(updatedSections);
  };

  const handleBrandDescriptionChange = (event) => {
    const updatedSections = sections.map((section, i) => {
      if (i === 0) {
        return { ...section, brandDescription: event.target.value };
      }
      return section;
    });

    // Mark as completed if both name and description are filled
    updatedSections[0].status = updatedSections[0].brandName && updatedSections[0].brandDescription ? "Completed" : "Incomplete";

    setSections(updatedSections);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedSections = sections.map((section, i) =>
          i === 1 ? { ...section, logo: reader.result, status: "Completed" } : section
        );
        setSections(updatedSections);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    const updatedSections = sections.map((section, i) =>
      i === 1 ? { ...section, logo: null, status: "Incomplete" } : section
    );
    setSections(updatedSections);
  };

  const handleNext = (index) => {
    // Automatically navigate to the next section if the brand name and description are completed
    if (index === 0 && sections[index].status === "Completed") {
      toggleSection(1); // Open Select Brand Logo section
    } else if (sections[index].status === "Completed" || sections[index].status === "Optional") {
      toggleSection(index + 1);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header-container md:flex md:items-center md:justify-between bg-gray-500 p-4 rounded-lg">
        <div className="header-title-container flex-1 min-w-0">
          <h3 className="header-title text-2xl font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Brand Setup
          </h3>
          <div className="header-description text-sm text-gray-300 mt-1">
            Provide your brand details once, and let our AI generate on-brand ad assets.
          </div>
        </div>
      </div>

      {/* Brand Setup Section */}
      <div className="flex">
        <div className="bg-[#F4E9EE] min-h-screen flex justify-center p-10 flex-grow">
          <div className="bg-[#F9EBF0] w-full max-w-6xl p-12 rounded-lg shadow-md relative flex">
            <div className="flex-grow">
              {/* Import from Website */}
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h2 className="font-semibold mb-2">Import from Website</h2>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Your Landing Page or Website (Example: adcreative.ai)"
                    className="flex-1 border px-4 py-3 rounded-lg text-gray-700"
                  />
                  <button className="bg-[#D63A7A] text-white px-4 py-2 rounded-lg">
                    Import Brand
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Import your branding from your website or enter brand details manually.
                </p>
              </div>
              <div className="main-flex flex">
                {/*Sections*/}
                <div className="space-y-3 w-full">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg p-6 shadow-sm cursor-pointer ${section.expanded ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        if (!section.expanded || (index === 0 && section.brandName && section.brandDescription)) {
                          toggleSection(index);
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">{section.title}</span>
                        <span className={`text-sm ${section.status === "Completed" ? "text-green-500" : "text-gray-500"}`}>
                          {section.status === "Completed" ? (
                            <span style={{ color: 'green' }}>✔️</span>
                          ) : (
                            <span className="text-red-500">*</span>
                          )}
                        </span>
                      </div>
                      {section.expanded && index === 0 && (
                        <div className="bg-transparent rounded-lg p-4 shadow-sm mt-4">
                          <div className="mb-4">
                            <label htmlFor="brandName" className="block text-gray-700 font-semibold mb-2">
                              Brand Name
                            </label>
                            <input
                              type="text"
                              id="brandName"
                              className="border px-4 py-3 rounded-lg text-gray-700 w-full"
                              value={sections[0].brandName}
                              onChange={handleBrandNameChange}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="brandDescription"
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Product/Service Description
                            </label>
                            <textarea
                              id="brandDescription"
                              className="border px-4 py-3 rounded-lg text-gray-700 w-full"
                              value={sections[0].brandDescription}
                              onChange={handleBrandDescriptionChange}
                            />
                          </div>
                          <button
                            onClick={() => handleNext(index)}
                            className={`w-auto py-2 px-8 rounded-lg mt-6 ${section.status === "Completed" ? "bg-red-600" : "bg-gray-500"} text-white`}
                            disabled={section.status !== "Completed"}
                          >
                            Next
                          </button>
                        </div>
                      )}

                      {section.expanded && index === 1 && (
                        <div className="bg-transparent rounded-lg p-4 shadow-sm mt-4">
                          <div className="p-4 border rounded-lg bg-gray-100">
                            <p className="text-gray-700 font-semibold mb-2">
                              Upload your logo here. A dark-colored logo with a transparent background is recommended.
                            </p>
                            <div className="flex items-center space-x-4">
                              <label className="border-dashed border-2 border-gray-300 rounded-lg p-4 w-full text-center cursor-pointer bg-white">
                                <input
                                  type="file"
                                  className="hidden"
                                  onChange={handleLogoUpload}
                                  accept="image/*"
                                />
                                <span className="text-gray-500">Upload a logo here</span>
                              </label>
                              {section.logo && (
                                <button
                                  onClick={removeLogo}
                                  className="p-2 bg-gray-200 rounded-lg hover:bg-red-300"
                                >
                                  <TrashIcon className="h-6 w-6 text-gray-600" />
                                </button>
                              )}
                            </div>
                            {section.logo && (
                              <div className="mt-4 p-4 border rounded-lg bg-white">
                                <p className="text-gray-700 font-semibold mb-2">Uploaded Logo:</p>
                                <img
                                  src={section.logo}
                                  alt="Brand Logo"
                                  className="h-16 mx-auto"
                                />
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => handleNext(index)}
                            className={`w-auto py-2 px-8 rounded-lg mt-6 ${section.status === "Completed" ? "bg-red-600" : "bg-gray-500"} text-white`}
                            disabled={section.status !== "Completed"}
                          >
                            Next
                          </button>
                        </div>
                      )}

                      {section.expanded && index === 2 && (
                        <div className="mt-4">
                          <h2 className="font-semibold mb-2">Select Brand Colors</h2>
                          <ColorPicker 
                            colors={colors} 
                            setColors={setColors} 
                            setColorChanged={setColorChanged} 
                            setSectionStatus={(status) => {
                              const updatedSections = sections.map((sec, i) => {
                                if (i === 2) {
                                  return { ...sec, status }; // Update the status of the Select Brand Colors section
                                }
                                return sec;
                              });
                              setSections(updatedSections);
                            }} 
                          />
                          <button
                            onClick={() => {
                              handleNext(index);
                              toggleSection(3); // Open Advanced Setup after changing color
                            }}
                            className={`w-auto py-2 px-8 rounded-lg mt-6 ${colorChanged ? "bg-red-600" : "bg-gray-500"} text-white`}
                            disabled={!colorChanged} // Enable button if color has been changed
                          >
                            Next
                          </button>
                        </div>
                      )}

                      {section.expanded && index === 3 && (
                        <AdvancedSetup />
                      )}
                    </div>
                  ))}
                </div>
                <div className="ml-6 w-[300px] h-[325px]">
                  {/* Image Preview */}
                  <ImagePreview />
                </div>
              </div>
              {/* Create Brand Button */}
              <div className="flex justify-end">
                <button
                  className={`w-auto py-2 px-8 rounded-lg mt-6 ${sections.slice(0, 3).every((section) => section.status === "Completed") ? "bg-red-600" : "bg-gray-500"} text-white`}
                  disabled={!sections.slice(0, 3).every((section) => section.status === "Completed")}
                >
                  Create Brand
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
