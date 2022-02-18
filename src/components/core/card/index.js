export const Card =({title, children})=>
{
    return (
    <div class="new-businnes">
    <div class="row">
        <div class="col-md-12">
            <div class="blue-title">
                <h6>{ title }</h6>
            </div>
        </div>
    </div>
    <div class="gray-divider mt-4 mb-4"></div>   
        {children}
</div>
);
}