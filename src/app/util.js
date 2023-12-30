export const transformData = (inputData) => {
    const transformedData = {
        segment_name: inputData.segment_name,
        schema: inputData.schema.map((item) => ({
            [item.value]: item.label,
        })),
    };

    return transformedData;
};